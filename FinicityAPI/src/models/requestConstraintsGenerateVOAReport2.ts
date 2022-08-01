/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ReportCustomFields,
  reportCustomFieldsSchema,
} from './reportCustomFields';

export interface RequestConstraintsGenerateVOAReport2 {
  /** Specific accountIds to be included in the new report. */
  accountIds?: string;
  /** Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. */
  reportCustomFields?: ReportCustomFields;
  /** Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. */
  showNsf?: boolean;
  [key: string]: unknown;
}

export const requestConstraintsGenerateVOAReport2Schema: Schema<RequestConstraintsGenerateVOAReport2> = expandoObject(
  {
    accountIds: ['accountIds', optional(string())],
    reportCustomFields: [
      'reportCustomFields',
      optional(lazy(() => reportCustomFieldsSchema)),
    ],
    showNsf: ['showNsf', optional(boolean())],
  }
);