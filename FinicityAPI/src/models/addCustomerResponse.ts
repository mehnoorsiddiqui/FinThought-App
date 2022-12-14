/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, Schema, string } from '../schema';

/** The Response Structure For The Add Customer Endpoint and Add Testing Customer Endpoint */
export interface AddCustomerResponse {
  /** The ID Of The New Customer Record */
  id: bigint;
  /** The Username Value Of The New Customer Record */
  username: string;
  /** A Timestamp Of When The Customer Was Added (see Handling Dates And Times) */
  createdDate: string;
  [key: string]: unknown;
}

export const addCustomerResponseSchema: Schema<AddCustomerResponse> = expandoObject(
  {
    id: ['id', bigint()],
    username: ['username', string()],
    createdDate: ['createdDate', string()],
  }
);
