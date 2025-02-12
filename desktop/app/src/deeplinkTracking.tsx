/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {Logger} from './fb-interfaces/Logger';

export type OpenPluginParams = {
  pluginId: string;
  client: string | undefined;
  devices: string[];
  payload: string | undefined;
};

export type DeeplinkInteraction = {
  state:
    | 'INIT'
    | 'ERROR'
    | 'PLUGIN_LIGHTHOUSE_BAIL'
    | 'PLUGIN_STATUS_BAIL'
    | 'PLUGIN_DEVICE_BAIL'
    | 'PLUGIN_DEVICE_UNSUPPORTED'
    | 'PLUGIN_CLIENT_UNSUPPORTED'
    | 'PLUGIN_OPEN_SUCCESS';
  errorMessage?: string;
  plugin?: OpenPluginParams;
  extra?: object;
};

export function track(
  logger: Logger,
  query: string,
  interaction: DeeplinkInteraction,
) {
  logger.track(
    'usage',
    'deeplink',
    {
      ...interaction,
      query,
    },
    interaction.plugin?.pluginId,
  );
}
