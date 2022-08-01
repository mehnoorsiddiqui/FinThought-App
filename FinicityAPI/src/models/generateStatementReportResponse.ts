/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, lazy, Schema, string } from '../schema';
import {
  GenerateStatementReportConstraints,
  generateStatementReportConstraintsSchema,
} from './generateStatementReportConstraints';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface GenerateStatementReportResponse {
  /** The Finicity report ID */
  id: string;
  /** A unique identifier that will be consistent across all reports created for the same customer. */
  portfolioId: string;
  /** Type of the customer */
  customerType: string;
  /** Finicity's customer ID */
  customerId: bigint;
  /** Finicity indicator to track all activity associated with this report. */
  requestId: string;
  /** Name of Finicity partner requesting the report */
  requesterName: string;
  /** The date the report was generated */
  createdDate: bigint;
  /** Finicity's title of the report */
  title: string;
  /** Finicity ID of the consumer */
  consumerId: string;
  /** Last 4 digits of the report consumer’s Social Security number */
  consumerSsn: string;
  constraints: GenerateStatementReportConstraints;
  /** Type of the report */
  type: TypeEnum;
  /** inProgress, success, or failure */
  status: string;
  [key: string]: unknown;
}

export const generateStatementReportResponseSchema: Schema<GenerateStatementReportResponse> = expandoObject(
  {
    id: ['id', string()],
    portfolioId: ['portfolioId', string()],
    customerType: ['customerType', string()],
    customerId: ['customerId', bigint()],
    requestId: ['requestId', string()],
    requesterName: ['requesterName', string()],
    createdDate: ['createdDate', bigint()],
    title: ['title', string()],
    consumerId: ['consumerId', string()],
    consumerSsn: ['consumerSsn', string()],
    constraints: [
      'constraints',
      lazy(() => generateStatementReportConstraintsSchema),
    ],
    type: ['type', typeEnumSchema],
    status: ['status', string()],
  }
);
