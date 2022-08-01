/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  optional,
  Schema,
  string,
} from '../schema';

export interface TxverifyInterview {
  /** The assetId assigned to the pay statement. Generated by Connect or by the Client by using the Store Customer Pay Statement API. */
  assetId: string;
  /** The accounts added by the consumer in Connect, if applicable */
  accounts?: bigint[];
  [key: string]: unknown;
}

export const txverifyInterviewSchema: Schema<TxverifyInterview> = expandoObject(
  {
    assetId: ['assetId', string()],
    accounts: ['accounts', optional(array(bigint()))],
  }
);
