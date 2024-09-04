// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { fileURLToPath } from "url"

// snippet-start:[s3.JavaScript.buckets.listBucketsV3]
import { ListBucketsCommand } from "@aws-sdk/client-s3"
import { s3Client } from ".."

export const main = async () => {
  const command = new ListBucketsCommand({})

  try {
    const { Owner, Buckets } = await s3Client.send(command)
    console.log(`${Owner.DisplayName} owns ${Buckets.length} bucket${Buckets.length === 1 ? "" : "s"}:`)
    console.log(`${Buckets.map((b) => ` • ${b.Name}`).join("\n")}`)
  } catch (err) {
    console.error(err)
  }
}
// snippet-end:[s3.JavaScript.buckets.listBucketsV3]

// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
