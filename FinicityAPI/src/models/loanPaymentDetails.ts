/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import {
  LoanPaymentDetailsAccountDetail,
  loanPaymentDetailsAccountDetailSchema,
} from './loanPaymentDetailsAccountDetail';

/** The loan payment details for the customer account */
export interface LoanPaymentDetails {
  /** The number of the specific loan under the account. */
  loanNumber: string;
  /** The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number. */
  loanPaymentNumber: string;
  /** The payment address to send manual payments to */
  loanPaymentAddress: string;
  accountDetail?: LoanPaymentDetailsAccountDetail;
  [key: string]: unknown;
}

export const loanPaymentDetailsSchema: Schema<LoanPaymentDetails> = expandoObject(
  {
    loanNumber: ['loanNumber', string()],
    loanPaymentNumber: ['loanPaymentNumber', string()],
    loanPaymentAddress: ['loanPaymentAddress', string()],
    accountDetail: [
      'accountDetail',
      optional(lazy(() => loanPaymentDetailsAccountDetailSchema)),
    ],
  }
);
