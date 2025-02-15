/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { VlmModeEnum } from '../constants';
import { Message, PredictionParsed, StatusEnum } from './index';
import { ShareVersion } from './share';

export interface Conversation extends Message {
  timing?: {
    start: number;
    end: number;
    cost: number;
  };
  /** exists when <image> exists */
  screenshotBase64?: string;
  screenshotContext?: {
    size: {
      width: number;
      height: number;
    };
  };
  predictionParsed?: PredictionParsed[];
  /** @deprecated */
  screenshotBase64WithElementMarker?: string;
  /** @deprecated */
  reflections?: string[];
}

/**
 * @deprecated use {@link GUIAgentData} instead
 * Computer Use data structure, can be used for recording and sharing
 */
export interface ComputerUseUserData extends GUIAgentData {}

export interface GUIAgentData {
  version: ShareVersion;
  /** Share operation instructions */
  instruction: string;
  systemPrompt: string;
  modelName: string;
  mode?: VlmModeEnum;
  logTime: number;
  status: StatusEnum;
  errMsg?: string;
  conversations: Conversation[];
}
