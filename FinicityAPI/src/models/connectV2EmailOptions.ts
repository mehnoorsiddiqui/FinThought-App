/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

/** The parameter definitions used to configure the Connect email's sent to customers. */
export interface ConnectV2EmailOptions {
  /** The email address for the customer receiving the Connect email. */
  to: string;
  /** The name of a person or business sending the Connect email. */
  from?: string;
  /** (Optional) The support phone number listed in the email. */
  supportPhone?: string;
  /** (Optional) The subject line of the email. The default is Verify your Financial Information. */
  subject?: string;
  /** (Optional) The first name of the customer or both names of the customers for joint borrowers. Example: Marvin and Jenny. */
  firstName?: string;
  /** (Optional) The name of your company. */
  institutionName?: string;
  /** (Optional) The institution address appears in the footer of the email. */
  institutionAddress?: string;
  /** (Optional) Add a signature to the email. */
  signature?: string[];
  [key: string]: unknown;
}

export const connectV2EmailOptionsSchema: Schema<ConnectV2EmailOptions> = expandoObject(
  {
    to: ['to', string()],
    from: ['from', optional(string())],
    supportPhone: ['supportPhone', optional(string())],
    subject: ['subject', optional(string())],
    firstName: ['firstName', optional(string())],
    institutionName: ['institutionName', optional(string())],
    institutionAddress: ['institutionAddress', optional(string())],
    signature: ['signature', optional(array(string()))],
  }
);