/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DirectPayStatementFields,
  directPayStatementFieldsSchema,
} from './directPayStatementFields';
import {
  PayrollAnnualIncomeRecord,
  payrollAnnualIncomeRecordSchema,
} from './payrollAnnualIncomeRecord';
import {
  PayrollMonthlyIncomeRecord,
  payrollMonthlyIncomeRecordSchema,
} from './payrollMonthlyIncomeRecord';

export interface PayrollIncomeRecord {
  /** The current pay frequency: <br> * `Daily` <br> * `Weekly` <br> * `Bi-Weekly` <br> * `Bi-Weekly Odd` (Bi-Weekly pay on odd weeks) <br> * `Bi-Weekly Even` (Bi-Weekly pay on even weeks) <br> * `Semi-Monthly` <br> * `Monthly` <br> * `Quarterly` <br>* `Semi-Annual` <br> * `Annual` <br>  * `Every 2.6 wks` <br> * `Every 4 wks` <br> * `Every 5.2 wks` */
  payFrequency: string;
  /** The current pay type. Options are `Salary`, `Hourly`, or `Daily`. */
  payType?: string;
  /** The current regular pay rate from the payroll provider. */
  basePayRate: number;
  annualIncome: PayrollAnnualIncomeRecord[];
  monthlyIncome: PayrollMonthlyIncomeRecord;
  /** An array of direct payments from an employer */
  directPayStatements: DirectPayStatementFields[];
  [key: string]: unknown;
}

export const payrollIncomeRecordSchema: Schema<PayrollIncomeRecord> = expandoObject(
  {
    payFrequency: ['payFrequency', string()],
    payType: ['payType', optional(string())],
    basePayRate: ['basePayRate', number()],
    annualIncome: [
      'annualIncome',
      array(lazy(() => payrollAnnualIncomeRecordSchema)),
    ],
    monthlyIncome: [
      'monthlyIncome',
      lazy(() => payrollMonthlyIncomeRecordSchema),
    ],
    directPayStatements: [
      'directPayStatements',
      array(lazy(() => directPayStatementFieldsSchema)),
    ],
  }
);