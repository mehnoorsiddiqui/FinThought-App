/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  expandoObject,
  lazy,
  number,
  Schema,
  string,
} from '../schema';
import { AccountDetail, accountDetailSchema } from './accountDetail';
import { AssetSummary, assetSummarySchema } from './assetSummary';
import {
  ReportIncomeStream,
  reportIncomeStreamSchema,
} from './reportIncomeStream';
import {
  ReportTransaction,
  reportTransactionSchema,
} from './reportTransaction';

export interface ReportAccount {
  /** The generated FInicity ID of the account */
  id: bigint;
  /** The account number from the institution (all digits except the last four are obfuscated) */
  number: string;
  /** The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. */
  ownerName: string;
  /** The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. */
  ownerAddress: string;
  /** The account name from the institution */
  name: string;
  /** One of the values from Account Types */
  type: string;
  /** The available balance for the account */
  availableBalance: number;
  /** The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) */
  aggregationStatusCode: number;
  /** The cleared balance of the account as-of balanceDate */
  balance: number;
  /** A timestamp showing when the balance was captured (see Handling Dates and Times) */
  balanceDate: bigint;
  /** The average monthly balance of this account */
  averageMonthlyBalance: number;
  /** An array of transactions belonging to the account. */
  transactions: ReportTransaction[];
  /** An asset record for the account */
  asset: AssetSummary;
  /** A details record for the account */
  details: AccountDetail;
  /** Best matched income stream record */
  incomeStream: ReportIncomeStream;
  /** A list of income stream records */
  incomeStreams: ReportIncomeStream[];
  [key: string]: unknown;
}

export const reportAccountSchema: Schema<ReportAccount> = expandoObject({
  id: ['id', bigint()],
  number: ['number', string()],
  ownerName: ['ownerName', string()],
  ownerAddress: ['ownerAddress', string()],
  name: ['name', string()],
  type: ['type', string()],
  availableBalance: ['availableBalance', number()],
  aggregationStatusCode: ['aggregationStatusCode', number()],
  balance: ['balance', number()],
  balanceDate: ['balanceDate', bigint()],
  averageMonthlyBalance: ['averageMonthlyBalance', number()],
  transactions: ['transactions', array(lazy(() => reportTransactionSchema))],
  asset: ['asset', lazy(() => assetSummarySchema)],
  details: ['details', lazy(() => accountDetailSchema)],
  incomeStream: ['incomeStream', lazy(() => reportIncomeStreamSchema)],
  incomeStreams: ['incomeStreams', array(lazy(() => reportIncomeStreamSchema))],
});
