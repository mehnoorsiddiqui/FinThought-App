/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ErrorMessage, errorMessageSchema } from './errorMessage';
import {
  PayStatementConstraints,
  payStatementConstraintsSchema,
} from './payStatementConstraints';
import { TypeEnum, typeEnumSchema } from './typeEnum';
import { VOIEPayStatement, vOIEPayStatementSchema } from './vOIEPayStatement';

export interface PayStatementReportRecord {
  /** Report id */
  id: string;
  /** Finicity ID for the customer */
  customerId: bigint;
  /** Finicity report consumer ID (max length 32 characters) */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  /** Unique requestId for this specific call request */
  requestId: string;
  /** Report type */
  type: TypeEnum;
  /** inProgress, success, or failure */
  status: string;
  errors?: ErrorMessage[];
  /** The date the report was generated */
  createdDate: bigint;
  constraints: PayStatementConstraints;
  source?: string;
  /** Customer type */
  customerType: string;
  /** Title of the report */
  title: string;
  /** The postedDate of the earliest transaction analyzed for this report */
  startDate: bigint;
  /** The postedDate of the latest transaction analyzed for this report */
  endDate: bigint;
  /** Finicity’s portfolio ID associated with the consumer on the report. */
  portfolioId: string;
  gseEnabled: boolean;
  reportStyle: string;
  /** Total number of billable pay statements included in the report */
  numberOfBillableAssets: number;
  assetIds: string[];
  /** Extracted pay statement details */
  payStatementTxverifyDaoList: VOIEPayStatement[];
  [key: string]: unknown;
}

export const payStatementReportRecordSchema: Schema<PayStatementReportRecord> = expandoObject(
  {
    id: ['id', string()],
    customerId: ['customerId', bigint()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    requesterName: ['requesterName', string()],
    requestId: ['requestId', string()],
    type: ['type', typeEnumSchema],
    status: ['status', string()],
    errors: ['errors', optional(array(lazy(() => errorMessageSchema)))],
    createdDate: ['createdDate', bigint()],
    constraints: ['constraints', lazy(() => payStatementConstraintsSchema)],
    source: ['source', optional(string())],
    customerType: ['customerType', string()],
    title: ['title', string()],
    startDate: ['startDate', bigint()],
    endDate: ['endDate', bigint()],
    portfolioId: ['portfolioId', string()],
    gseEnabled: ['gseEnabled', boolean()],
    reportStyle: ['reportStyle', string()],
    numberOfBillableAssets: ['numberOfBillableAssets', number()],
    assetIds: ['assetIds', array(string())],
    payStatementTxverifyDaoList: [
      'payStatementTxVerifyDaoList',
      array(lazy(() => vOIEPayStatementSchema)),
    ],
  }
);
