import os
import fnmatch
import argparse
import subprocess

# Default exclude files or directories with wildcard support
exclude_files = [
    '_*.py',
    'node_modules'
]


def find_files(base_dir, pattern, exclude):
    matched_files = []
    for root, dirs, files in os.walk(base_dir):
        # Exclude specified directories with wildcard support
        dirs[:] = [d for d in dirs if not any(
            fnmatch.fnmatch(d, pat) for pat in exclude)]

        print(f"Checking directory: {root}")
        for file in files:
            if fnmatch.fnmatch(file, pattern) and not any(fnmatch.fnmatch(file, pat) for pat in exclude):
                matched_files.append(os.path.relpath(
                    os.path.join(root, file), base_dir))
                print(f"Matched file: {file}")
            else:
                print(f"Skipped file: {file}")
    return matched_files


def main():
    global exclude_files

    print("Running _copy_for_prompt.py")
    # Parse command-line options
    parser = argparse.ArgumentParser(
        description='Generate clipboard content from specified files.')
    parser.add_argument('-b', '--base-dir', default=os.getcwd(),
                        help='Base directory to search files in (default: current directory)')
    parser.add_argument('-f', '--file-pattern', default="*",
                        help='File pattern to search for (e.g., agentchat*)')
    parser.add_argument('-m', '--message', default='Please update the files so that it follows the UI in the screenshot',
                        help='Message to include in the clipboard content')
    parser.add_argument('-fo', '--filenames-only', action='store_true',
                        help='Only copy the relative filenames, not their contents')
    parser.add_argument('-e', '--exclude', nargs='*', default=exclude_files,
                        help='Directories or files to exclude (default: node_modules)')

    args = parser.parse_args()
    base_dir = args.base_dir
    file_pattern = args.file_pattern
    message = args.message
    filenames_only = args.filenames_only
    exclude = args.exclude

    # Update global exclude_files list
    exclude_files = exclude

    # Find all files matching the pattern in the base directory and its subdirectories
    print("\n")
    files = find_files(base_dir, file_pattern, exclude)

    print("\n")
    print(f"Base directory: {base_dir}")
    print(f"File pattern: {file_pattern}")
    print(f"Message: {message}")
    print(f"Filenames only: {filenames_only}")
    print(f"Exclude: {exclude}")
    print(f"Found files ({len(files)}): {files}")

    if not files:
        print("No files found matching the given pattern.")
        return
    print("\n")

    # Initialize the clipboard content
    clipboard_content = f"{message}\n\n\n"

    # Append relative filenames to the clipboard content
    for file in files:
        prefix = (
            f"## Relative path: {file}\n" if not filenames_only else f"{file}\n")
        if filenames_only:
            clipboard_content += f"{prefix}"
        else:
            file_path = os.path.join(base_dir, file)
            if os.path.isfile(file_path):
                with open(file_path, 'r') as f:
                    clipboard_content += (
                        f"{prefix}{f.read()}\n\n")
            else:
                clipboard_content += f"{prefix}\n"

    # Print the content to the console for manual copying (if needed)
    # print(clipboard_content)

    # Copy the content to the clipboard
    process = subprocess.Popen(
        'pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
    process.communicate(clipboard_content.encode('utf-8'))


if __name__ == "__main__":
    main()

# Sample usage:
# python _copy_for_prompt.py -m "Generate commit description"
