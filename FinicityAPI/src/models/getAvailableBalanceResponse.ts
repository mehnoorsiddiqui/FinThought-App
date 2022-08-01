/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, number, Schema, string } from '../schema';

export interface GetAvailableBalanceResponse {
  /** ID for the customer who owns the account */
  id: bigint;
  /** The last 4 digits of the ACH account number */
  realAccountNumberLast4: string;
  /** The available balance of the account */
  availableBalance: number;
  /** Epoch Unix Timestamp for when the available balance was retrieved */
  availableBalanceDate: bigint;
  /** The cleared balance of the account. Also referred as posted balance, current balance, ledger balance */
  clearedBalance: number;
  /** Epoch Unix Timestamp for when the cleared balance was retrieved */
  clearedBalanceDate: bigint;
  /** The status of the most recent aggregation attempt (see Handling Aggregation Status Codes). This will not be present until you have run your first aggregation for the account. */
  aggregationStatusCode: number;
  /** The currency of the account */
  currency: string;
  [key: string]: unknown;
}

export const getAvailableBalanceResponseSchema: Schema<GetAvailableBalanceResponse> = expandoObject(
  {
    id: ['id', bigint()],
    realAccountNumberLast4: ['realAccountNumberLast4', string()],
    availableBalance: ['availableBalance', number()],
    availableBalanceDate: ['availableBalanceDate', bigint()],
    clearedBalance: ['clearedBalance', number()],
    clearedBalanceDate: ['clearedBalanceDate', bigint()],
    aggregationStatusCode: ['aggregationStatusCode', number()],
    currency: ['currency', string()],
  }
);
