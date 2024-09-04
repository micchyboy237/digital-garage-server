import os
import fnmatch
import argparse
import subprocess

exclude_files = [
    "node_modules",
]

include_files = [
    "run.s3-upload.ts",
    "src/config.ts",
    "s3.service.ts",
    "s3.utils.ts",
    "types.ts"
]

DEFAULT_SYSTEM_MESSAGE = """
Dont use memory
""".strip()

DEFAULT_MESSAGE = """
Please correct uploadImageAndThumbnail response

jethroestrada@Jethros-Mac-mini aws % pnpm test:s3

> @boilerplate/aws@1.0.0 test:s3 /Users/jethroestrada/Desktop/External_Projects/DigitalGarage/digital-garage/packages/aws
> npx tsx __tests__/s3/run.s3-upload.ts

Environment variables loaded from .env.local
AWS environment variables:
 {
  "AWS_S3_BUCKET_NAME": "local-classic-garage-bucket",
  "AWS_PROFILE": "classic-garage-s3-local",
  "AWS_REGION": "eu-west-2",
  "AWS_S3_ENDPOINT": "https://s3.eu-west-2.amazonaws.com"
}
AWS S3 bucket:
 {
  "region": "eu-west-2",
  "s3BucketName": "local-classic-garage-bucket"
}
AWS S3 client configured successfully


Started uploadS3 function
Converting stream to buffer
Uploading image and thumbnail to S3:
 {
  "originalname": "sample-vehicle-display.jpeg",
  "bufferLength": 178073
}
Starting the file upload process...
Folder specified: images
Uploading file to bucket: local-classic-garage-bucket, with key: images/sample-vehicle-display.jpeg
Sending upload request to S3...
Upload progress: {
  loaded: 207653,
  total: 207653,
  part: 1,
  Key: 'images/sample-vehicle-display.jpeg',
  Bucket: 'local-classic-garage-bucket'
}
Upload request sent successfully
Image successfully uploaded to: https://local-classic-garage-bucket.s3.async () => {
    if (runtimeConfig.region === void 0) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region;
    if (typeof region === "string") {
      return region;
    }
    return region();
  }.amazonaws.com/images/sample-vehicle-display.jpeg
Starting the file upload process...
Folder specified: images
Uploading file to bucket: local-classic-garage-bucket, with key: images/sample-vehicle-display_thumb.jpeg
Sending upload request to S3...
Upload progress: {
  loaded: 5908,
  total: 5908,
  part: 1,
  Key: 'images/sample-vehicle-display_thumb.jpeg',
  Bucket: 'local-classic-garage-bucket'
}
Upload request sent successfully
Image successfully uploaded to: https://local-classic-garage-bucket.s3.async () => {
    if (runtimeConfig.region === void 0) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region;
    if (typeof region === "string") {
      return region;
    }
    return region();
  }.amazonaws.com/images/sample-vehicle-display_thumb.jpeg
File upload completed successfully:
 {
  "imageUrl": "https://local-classic-garage-bucket.s3.async () => {\n    if (runtimeConfig.region === void 0) {\n      throw new Error(\"Region is missing from runtimeConfig\");\n    }\n    const region = runtimeConfig.region;\n    if (typeof region === \"string\") {\n      return region;\n    }\n    return region();\n  }.amazonaws.com/images/sample-vehicle-display.jpeg",
  "thumbnailUrl": "https://local-classic-garage-bucket.s3.async () => {\n    if (runtimeConfig.region === void 0) {\n      throw new Error(\"Region is missing from runtimeConfig\");\n    }\n    const region = runtimeConfig.region;\n    if (typeof region === \"string\") {\n      return region;\n    }\n    return region();\n  }.amazonaws.com/images/sample-vehicle-display_thumb.jpeg"
}
File uploaded to: {
  imageUrl: 'https://local-classic-garage-bucket.s3.async () => {\n' +
    '    if (runtimeConfig.region === void 0) {\n' +
    '      throw new Error("Region is missing from runtimeConfig");\n' +
    '    }\n' +
    '    const region = runtimeConfig.region;\n' +
    '    if (typeof region === "string") {\n' +
    '      return region;\n' +
    '    }\n' +
    '    return region();\n' +
    '  }.amazonaws.com/images/sample-vehicle-display.jpeg',
  thumbnailUrl: 'https://local-classic-garage-bucket.s3.async () => {\n' +
    '    if (runtimeConfig.region === void 0) {\n' +
    '      throw new Error("Region is missing from runtimeConfig");\n' +
    '    }\n' +
    '    const region = runtimeConfig.region;\n' +
    '    if (typeof region === "string") {\n' +
    '      return region;\n' +
    '    }\n' +
    '    return region();\n' +
    '  }.amazonaws.com/images/sample-vehicle-display_thumb.jpeg'
}
jethroestrada@Jethros-Mac-mini aws %
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
    print(f"\nMessage: {message}")

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
