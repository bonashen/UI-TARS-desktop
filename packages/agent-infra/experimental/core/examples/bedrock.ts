/*
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnthropicBedrock } from '@anthropic-ai/bedrock-sdk';

// Note: this assumes you have configured AWS credentials in a way
// that the AWS Node SDK will recognise, typicaly a shared `~/.aws/credentials`
// file or `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` environment variables.
//
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html
const anthropic = new AnthropicBedrock({
  baseURL: process.env.AWS_CLAUDE_API_BASE_URL as string,
  awsSecretKey: 'cluade',
  awsAccessKey: 'cluade',
  awsRegion: 'sg',
});

async function main() {
  const message = await anthropic.messages.create({
    model: 'aws_sdk_claude37_sonnet',
    messages: [
      {
        role: 'user',
        content: 'Hello!',
      },
    ],
    max_tokens: 1024,
  });
  console.log(message);
}

main();
