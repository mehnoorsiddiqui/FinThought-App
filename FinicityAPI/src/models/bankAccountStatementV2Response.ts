/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';

export interface BankAccountStatementV2Response {
  id: string;
  asOfDate: number;
  [key: string]: unknown;
}

export const bankAccountStatementV2ResponseSchema: Schema<BankAccountStatementV2Response> = expandoObject(
  { id: ['id', string()], asOfDate: ['asOfDate', number()] }
);