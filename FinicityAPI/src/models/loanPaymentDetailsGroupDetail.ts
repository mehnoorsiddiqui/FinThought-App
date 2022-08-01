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
  LoanPaymentDetailsLoanDetail,
  loanPaymentDetailsLoanDetailSchema,
} from './loanPaymentDetailsLoanDetail';

export interface LoanPaymentDetailsGroupDetail {
  /** Finicity's ID of the Student Loan Group */
  accountId: string;
  /** Institution's ID of the Student Loan Group */
  groupNumber: string;
  /** The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. */
  groupPaymentNumber: string;
  /** The payment address to which send manual payments should be sent */
  groupPaymentAddress: string;
  /** The payoff amount for the group */
  groupFuturePayoffAmount?: number;
  /** The date to which the `Future Payoff Amount` applies */
  groupFuturePayoffDate?: string;
  groupLoanDetail: LoanPaymentDetailsLoanDetail[];
  [key: string]: unknown;
}

export const loanPaymentDetailsGroupDetailSchema: Schema<LoanPaymentDetailsGroupDetail> = expandoObject(
  {
    accountId: ['accountId', string()],
    groupNumber: ['groupNumber', string()],
    groupPaymentNumber: ['groupPaymentNumber', string()],
    groupPaymentAddress: ['groupPaymentAddress', string()],
    groupFuturePayoffAmount: ['groupFuturePayoffAmount', optional(number())],
    groupFuturePayoffDate: ['groupFuturePayoffDate', optional(string())],
    groupLoanDetail: [
      'groupLoanDetail',
      array(lazy(() => loanPaymentDetailsLoanDetailSchema)),
    ],
  }
);
