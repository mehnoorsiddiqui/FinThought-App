/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface GenerateConnectURLRequestFixV2 {
  /** The partner id you can obtain from your Finicity developer dashboard */
  partnerId: string;
  /** Finicity’s customer ID. Obtained from the Add Customer call. */
  customerId: string;
  /** The institutionLoginId for the account record. Used in type “fix” in order to pull up a fix flow for a specific set of accounts under one institutionLoginId. */
  institutionLoginId: number;
  /** The url that customers will be redirected to after completing Finicity Connect. <br> *Required unless Connect is embedded inside your application. (iframe)* */
  redirectUri?: string;
  /** The publicly available URL you wish to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://docs.finicity.com/connect-webhooks/) for event details. */
  webhook?: string;
  /** The Content Type The Webhooks Events Will Be Sent In. Supported Types `application/json` and `application/xml` */
  webhookContentType?: string;
  /** Allows additional identifiable information to be inserted into the payload of connect webhook events. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). */
  webhookData?: unknown;
  /** Allows additional identifiable information to be included as headers of connect webhook event. See this article for [Details](https://docs.finicity.com/connect-custom-webhook-data-and-headers/). */
  webhookHeaders?: unknown;
  /** The `experience` field allows you to customize: <br> * **Brand**: color and logo <br> * **Icon**: displayed on the Share your data page <br>      <br>**Note**: The Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2. For each additional experience you create thereafter, they’ll give you a unique ID. See [Generate 2.0 Connect URL APIs]( https://docs.finicity.com/migrate-to-connect-web-sdk-2-0/#migrate-connect-web-sdk-1) <br>  <br>**Experience values options**: <br> * **default**: your default experience <br> * **unique ID**: the code for a different experience <br> * **not defined**: If you don’t pass the experience parameter, then Connect’s out of the box default experience (add accounts but no branding) is used. <br> */
  experience?: string;
  /** **True**: The URL link expires after a Connect session successfully completes. <br> <br> **Note**: When the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter. */
  singleUseUrl?: boolean;
  [key: string]: unknown;
}

export const generateConnectURLRequestFixV2Schema: Schema<GenerateConnectURLRequestFixV2> = expandoObject(
  {
    partnerId: ['partnerId', string()],
    customerId: ['customerId', string()],
    institutionLoginId: ['institutionLoginId', number()],
    redirectUri: ['redirectUri', optional(string())],
    webhook: ['webhook', optional(string())],
    webhookContentType: ['webhookContentType', optional(string())],
    webhookData: ['webhookData', optional(unknown())],
    webhookHeaders: ['webhookHeaders', optional(unknown())],
    experience: ['experience', optional(string())],
    singleUseUrl: ['singleUseUrl', optional(boolean())],
  }
);
