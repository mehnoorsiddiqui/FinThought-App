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
  ReportCustomField,
  reportCustomFieldSchema,
} from './reportCustomField';
import {
  VOIEWithInterviewData,
  vOIEWithInterviewDataSchema,
} from './vOIEWithInterviewData';

export interface VOIETxverifyConstraints {
  /** Specific accountIds to be included in the report. If this is not passed then the report will default to using all supported accounts previously added for this customer. */
  accountIds: string;
  /** Include income streams in the report, based on the income stream’s confidence score. <br> <br> **Example**: If you pass in the value 50, then only income streams with a confidence score of 50 or higher are included. */
  incomeStreamConfidenceMinimum?: number;
  voieWithInterviewData: VOIEWithInterviewData;
  /** Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. */
  reportCustomFields?: ReportCustomField[];
  /** The fromDate parameter is an Epoch Timestamp (in seconds), such as '1494449017'. Without this parameter, the report defaults to 61 days if available. Example: ?fromDate={fromDate}. If included, the epoch timestamp should be 10 digits long and be within twelve months of the present day. Extending the epoch timestamp beyond 10 digits will default back to twelve months of data. This query is optional. fromDate can also be passed as a query. */
  fromDate?: bigint;
  [key: string]: unknown;
}

export const vOIETxverifyConstraintsSchema: Schema<VOIETxverifyConstraints> = expandoObject(
  {
    accountIds: ['accountIds', string()],
    incomeStreamConfidenceMinimum: [
      'incomeStreamConfidenceMinimum',
      optional(number()),
    ],
    voieWithInterviewData: [
      'voieWithInterviewData',
      lazy(() => vOIEWithInterviewDataSchema),
    ],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldSchema))),
    ],
    fromDate: ['fromDate', optional(bigint())],
  }
);
