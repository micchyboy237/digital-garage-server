import os
import fnmatch
import argparse
import subprocess

exclude_files = [
    "node_modules",
]

include_files = [
    "package.json",
    "tsconfig.json",
    "server.ts",
    "s3.service.ts",
    "config.ts",
]

DEFAULT_SYSTEM_MESSAGE = """
Dont use memory
""".strip()

DEFAULT_MESSAGE = """
Please fix the following error:

jethroestrada@Jethros-Mac-mini api % pnpm dev

> @boilerplate/api@1.0.0 dev /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/api
> pnpm with-env npx tsx watch server.ts


> @boilerplate/api@1.0.0 with-env /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/api
> dotenv -e ../../.env -- "npx" "tsx" "watch" "server.ts"

Environment file .env.development not found, skipping...
AWS environment variables:
 {
  "AWS_SECRET_KEY_USER": "03j430wepdgsdig-3koprsdmg",
  "AWS_ACCESS_KEY_USER": "3p24imwpaejipmsaggas"
}
AWS S3 bucket:
 {
  "region": "eu-west-2",
  "s3BucketName": "local-classic-garage-bucket"
}
AWS S3 client configured successfully


node:internal/modules/cjs/loader:1212
  const err = new Error(message);
              ^

Error: Cannot find module 'src/config'
Require stack:
- /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/src/services/s3.service.ts
- /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/src/services/index.ts
- /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/index.ts
- /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/api/server.ts
    at Module._resolveFilename (node:internal/modules/cjs/loader:1212:15)
    at nextResolveSimple (/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-C1urN2EO.cjs:3:942)
    at /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-C1urN2EO.cjs:2:2486
    at /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-C1urN2EO.cjs:2:1560
    at resolveTsPaths (/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-C1urN2EO.cjs:3:760)
    at /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-C1urN2EO.cjs:3:1035
    at m._resolveFilename (file:///Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/node_modules/tsx/dist/register-BArwRho-.mjs:1:789)
    at Module._load (node:internal/modules/cjs/loader:1038:27)
    at wrapModuleLoad (node:internal/modules/cjs/loader:212:19)
    at Module.require (node:internal/modules/cjs/loader:1297:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/src/services/s3.service.ts',
    '/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/src/services/index.ts',
    '/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws/index.ts',
    '/Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/api/server.ts'
  ]
}

Node.js v22.3.0


""".strip()


# base_dir should be actual file directory
file_dir = os.path.dirname(os.path.realpath(__file__))
print("file_dir: ", file_dir)


def find_files(base_dir, include, exclude):
    print("Finding files:", base_dir, include, exclude)
    matched_files = []
    for root, dirs, files in os.walk(base_dir):
        # Exclude specified directories with or without wildcard support
        dirs[:] = [d for d in dirs if not any(
            fnmatch.fnmatch(d, pat) or fnmatch.fnmatch(os.path.join(root, d), pat) for pat in exclude)]

        # Check for directories that match the include patterns
        for dir_name in dirs:
            dir_path = os.path.relpath(os.path.join(root, dir_name), base_dir)
            if any(fnmatch.fnmatch(dir_name, pat) for pat in include) or any(fnmatch.fnmatch(dir_path, pat) for pat in include):
                # If the directory matches, find all files within this directory
                for sub_root, _, sub_files in os.walk(os.path.join(root, dir_name)):
                    for file in sub_files:
                        file_path = os.path.relpath(
                            os.path.join(sub_root, file), base_dir)
                        if not any(fnmatch.fnmatch(file_path, pat) for pat in exclude):
                            matched_files.append(file_path)
                            print(f"Matched file in directory: {file_path}")

        # Check for files that match the include patterns
        for file in files:
            file_path = os.path.relpath(os.path.join(root, file), base_dir)
            if (any(fnmatch.fnmatch(file, pat) for pat in include) or any(fnmatch.fnmatch(file_path, pat) for pat in include)) and not any(fnmatch.fnmatch(file_path, pat) for pat in exclude):
                matched_files.append(file_path)
                print(f"Matched file: {file_path}")

    return matched_files


def main():
    global exclude_files, include_files

    print("Running _copy_for_prompt.py")
    # Parse command-line options
    parser = argparse.ArgumentParser(
        description='Generate clipboard content from specified files.')
    parser.add_argument('-b', '--base-dir', default=file_dir,
                        help='Base directory to search files in (default: current directory)')
    parser.add_argument('-i', '--include', nargs='*', default=include_files,
                        help='Patterns of files to include (default: schema.prisma, episode)')
    parser.add_argument('-e', '--exclude', nargs='*', default=exclude_files,
                        help='Directories or files to exclude (default: node_modules)')
    parser.add_argument('-s', '--system', default=DEFAULT_SYSTEM_MESSAGE,
                        help='Message to include in the clipboard content')
    parser.add_argument('-m', '--message', default=DEFAULT_MESSAGE,
                        help='Message to include in the clipboard content')
    parser.add_argument('-fo', '--filenames-only', action='store_true',
                        help='Only copy the relative filenames, not their contents')

    args = parser.parse_args()
    base_dir = args.base_dir
    include = args.include
    exclude = args.exclude
    message = args.message
    system_message = args.system
    filenames_only = args.filenames_only
    # Update global lists
    include_files = include
    exclude_files = exclude

    # base_dir = file_dir
    # include = include_files
    # exclude = exclude_files
    # message = DEFAULT_MESSAGE
    # system_message = DEFAULT_SYSTEM_MESSAGE
    # filenames_only = False

    # Find all files matching the patterns in the base directory and its subdirectories
    print("\n")
    files = find_files(base_dir, include, exclude)

    print("\n")
    print(f"Base directory: {base_dir}")
    print(f"Include patterns: {include}")
    print(f"Exclude patterns: {exclude}")
    print(f"Filenames only: {filenames_only}")
    print(f"\nFound files ({len(files)}): {files}")

    if not files:
        print("No files found matching the given patterns.")
        return
    print("\n")

    # Initialize the clipboard content
    clipboard_content = ""

    # Append system message to the clipboard content
    clipboard_content += f"{system_message}\n\n\n"

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

    # Append the message to the clipboard content
    clipboard_content += f"\n{message}"
    # Add a newline at the end
    clipboard_content += "\n"

    # Print the content to the console for manual copying (if needed)
    # print(clipboard_content)

    # Copy the content to the clipboard
    process = subprocess.Popen(
        'pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
    process.communicate(clipboard_content.encode('utf-8'))


if __name__ == "__main__":
    main()

# Sample usage:
# python _copy_for_prompt.py -m "Check if anything's wrong"
