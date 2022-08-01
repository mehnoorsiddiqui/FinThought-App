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
  PrequalificationReportAssetSummary,
  prequalificationReportAssetSummarySchema,
} from './prequalificationReportAssetSummary';
import {
  ReportConstraints,
  reportConstraintsSchema,
} from './reportConstraints';
import { TypeEnum, typeEnumSchema } from './typeEnum';
import {
  VOAReportInstitution,
  vOAReportInstitutionSchema,
} from './vOAReportInstitution';

/** VOA Report Record */
export interface VOAReportRecord {
  /** Finicity's report ID */
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
  constraints?: ReportConstraints;
  /** Customer type */
  customerType: string;
  /** Title of the report */
  title: string;
  /** The postedDate of the earliest transaction analyzed for this report */
  startDate: bigint;
  /** The postedDate of the latest transaction analyzed for this report */
  endDate: bigint;
  /** Number of days covered by the report */
  days: bigint;
  /** This will display true if the report covers more than 180 days */
  seasoned: boolean;
  /** Finicity Internal Use Only */
  gseEnabled: boolean;
  /** Sum of Available Balance for all of the accounts included in the report */
  consolidatedAvailableBalance: number;
  /** Finicity’s portfolio ID associated with the consumer on the report. */
  portfolioId: string;
  /** A list of institution records, including information about the individual accounts used in this report */
  institutions: VOAReportInstitution[];
  assets: PrequalificationReportAssetSummary;
  [key: string]: unknown;
}

export const vOAReportRecordSchema: Schema<VOAReportRecord> = expandoObject({
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
  constraints: ['constraints', optional(lazy(() => reportConstraintsSchema))],
  customerType: ['customerType', string()],
  title: ['title', string()],
  startDate: ['startDate', bigint()],
  endDate: ['endDate', bigint()],
  days: ['days', bigint()],
  seasoned: ['seasoned', boolean()],
  gseEnabled: ['gseEnabled', boolean()],
  consolidatedAvailableBalance: ['consolidatedAvailableBalance', number()],
  portfolioId: ['portfolioId', string()],
  institutions: ['institutions', array(lazy(() => vOAReportInstitutionSchema))],
  assets: ['assets', lazy(() => prequalificationReportAssetSummarySchema)],
});