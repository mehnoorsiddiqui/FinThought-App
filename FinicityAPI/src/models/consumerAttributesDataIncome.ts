/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, unknown } from '../schema';

export interface ConsumerAttributesDataIncome {
  /** Net annual of all income by customer for the last 12 months. */
  netAnnualIncome: number;
  /** Net annual of income by account for the last 12 months. */
  netAnnualIncomeByAccount?: unknown;
  /** Net monthly income by customer for the last 12 months. */
  monthlyNetIncome?: unknown;
  /** Net monthly income by account for the last 12 months. */
  monthlyNetIncomeByAccount?: unknown;
  [key: string]: unknown;
}

export const consumerAttributesDataIncomeSchema: Schema<ConsumerAttributesDataIncome> = expandoObject(
  {
    netAnnualIncome: ['netAnnualIncome', number()],
    netAnnualIncomeByAccount: ['netAnnualIncomeByAccount', unknown()],
    monthlyNetIncome: ['monthlyNetIncome', unknown()],
    monthlyNetIncomeByAccount: ['monthlyNetIncomeByAccount', unknown()],
  }
);
