/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, unknown } from '../schema';

/** oauthOptions for oauthEnabled institutions */
export interface ConnectOauthOptionsCopy {
  /** Indicates if OAuth institutions should be enabled for the session */
  enabled: boolean;
  /** If set to true, Connect will replace OAuth institutions based on the customer's existing accounts. e.g if the customer has a legacy Chase account, legacy Chase will be used throughout the session but if the user doesn't have a Capital One legacy account, OAuth Capital One will be used for the session. */
  autoReplace?: boolean;
  /** Provides the ability to control what institutions should or shouldn't be displayed to the user */
  institutions?: unknown;
  [key: string]: unknown;
}

export const connectOauthOptionsCopySchema: Schema<ConnectOauthOptionsCopy> = expandoObject(
  {
    enabled: ['enabled', boolean()],
    autoReplace: ['autoReplace', optional(boolean())],
    institutions: ['institutions', optional(unknown())],
  }
);
