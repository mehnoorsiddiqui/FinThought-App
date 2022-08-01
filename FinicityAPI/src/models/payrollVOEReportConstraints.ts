/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { PayrollVOEData, payrollVOEDataSchema } from './payrollVOEData';
import {
  ReportCustomField,
  reportCustomFieldSchema,
} from './reportCustomField';

export interface PayrollVOEReportConstraints {
  payrollData: PayrollVOEData;
  /** Designate up to 5 custom fields that you would like associated with the report upon generation by providing a label for the field and a value for the field. Set the shown variable to true if you want the custom field to display in the PDF reports. Set the shown variable to false to limit seeing the variable to JSON, XML report but not in the PDF report. All custom fields will display in the Reseller Billing endpoint.  This is optional. */
  reportCustomFields?: ReportCustomField[];
  [key: string]: unknown;
}

export const payrollVOEReportConstraintsSchema: Schema<PayrollVOEReportConstraints> = expandoObject(
  {
    payrollData: ['payrollData', lazy(() => payrollVOEDataSchema)],
    reportCustomFields: [
      'reportCustomFields',
      optional(array(lazy(() => reportCustomFieldSchema))),
    ],
  }
);
