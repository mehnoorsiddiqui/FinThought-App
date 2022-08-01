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
  optional,
  Schema,
  string,
} from '../schema';
import {
  ReportIncomeStreamRecord,
  reportIncomeStreamRecordSchema,
} from './reportIncomeStreamRecord';
import {
  VOIReportTransactionRecord,
  vOIReportTransactionRecordSchema,
} from './vOIReportTransactionRecord';

/** VOI Report Account Record */
export interface VOIReportAccountRecord {
  /** The generated FInicity ID of the account */
  id: bigint;
  /** The account number from the institution (all digits except the last four are obfuscated) */
  number: string;
  /** The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. */
  ownerName?: string;
  /** The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report. */
  ownerAddress?: string;
  /** The account name from the institution */
  name: string;
  /** One of the values from Account Types */
  type: string;
  /** The status of the most recent aggregation attempt (see Handling Aggregation Status Codes) */
  aggregationStatusCode: number;
  /** A list of income stream records */
  incomeStreams: ReportIncomeStreamRecord[];
  /** The cleared balance of the account as-of balanceDate */
  balance: number;
  /** The average monthly balance of this account */
  averageMonthlyBalance: number;
  /** An array of transactions belonging to the account. */
  transactions: number[];
  /** The available balance for the account */
  availableBalance: number;
  /** Current balance of the account */
  currentBalance: number;
  /** Beginning balance of account per the time period in the report */
  beginningBalance: number;
  /** A list of miscellaneous deposits */
  miscDeposits: VOIReportTransactionRecord[];
  [key: string]: unknown;
}

export const vOIReportAccountRecordSchema: Schema<VOIReportAccountRecord> = expandoObject(
  {
    id: ['id', bigint()],
    number: ['number', string()],
    ownerName: ['ownerName', optional(string())],
    ownerAddress: ['ownerAddress', optional(string())],
    name: ['name', string()],
    type: ['type', string()],
    aggregationStatusCode: ['aggregationStatusCode', number()],
    incomeStreams: [
      'incomeStreams',
      array(lazy(() => reportIncomeStreamRecordSchema)),
    ],
    balance: ['balance', number()],
    averageMonthlyBalance: ['averageMonthlyBalance', number()],
    transactions: ['transactions', array(number())],
    availableBalance: ['availableBalance', number()],
    currentBalance: ['currentBalance', number()],
    beginningBalance: ['beginningBalance', number()],
    miscDeposits: [
      'miscDeposits',
      array(lazy(() => vOIReportTransactionRecordSchema)),
    ],
  }
);