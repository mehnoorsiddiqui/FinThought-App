/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** Response from create url call */
export interface GenerateConnectURLResponse {
  /** The generated Connect URL */
  link: string;
  [key: string]: unknown;
}

export const generateConnectURLResponseSchema: Schema<GenerateConnectURLResponse> = expandoObject(
  { link: ['link', string()] }
);