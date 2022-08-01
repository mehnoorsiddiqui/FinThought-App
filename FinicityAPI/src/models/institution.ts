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
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetInstitutionsInstitutionBranding,
  getInstitutionsInstitutionBrandingSchema,
} from './getInstitutionsInstitutionBranding';
import {
  InstitutionAddress,
  institutionAddressSchema,
} from './institutionAddress';

/** A financial institution's Finicity registered details */
export interface Institution {
  /** The institution’s ID */
  id: bigint;
  /** The name of the institution */
  name?: string;
  /** **true**: The institution is certified for the Transaction Aggregation product. <br> <br> **false**: The institution is decertified for the Transaction Aggregation product */
  transAgg: boolean;
  /** **true**: The institution is certified for the ACH product. <br> <br> **false**: The institution is decertified for the ACH product. */
  ach: boolean;
  /** **true**: The institution is certified for the Statement Aggregation product. <br> <br> **false**: The institution is decertified for the Statement Aggregation product */
  stateAgg: boolean;
  /** **true**: The institution is certified for the VOI product. <br> <br> **false**: The institution is decertified for the VOI product. */
  voi: boolean;
  /** **true**: The institution is certified for the VOA product. <br> <br> **false**: The institution is decertified for the VOA product. */
  voa: boolean;
  /** **true**: The institution is certified for the Account History Aggregation product. <br> <br> **false**: The institution is decertified for the Account History Aggregation product */
  aha: boolean;
  /** **true**: The institution is certified for the Account Balance Check (ABC) product. <br> <br> **false**: The institution is decertified for the Account Balance Check product. */
  availBalance: boolean;
  /** **true**: The institution is certified for the Account Owner product. <br> <br> **false**: The institution is decertified for the Account Owner product. */
  accountOwner: boolean;
  /** **Values**: Banking, Investments, Credit Cards/Accounts, Workplace Retirement, Mortgages and Loans, Insurance */
  accountTypeDescription?: string;
  /** The institution’s primary phone number */
  phone?: string;
  /** The URL of the institution’s primary home page */
  urlHomeApp?: string;
  /** The URL of the institution’s login page */
  urlLogonApp?: string;
  /** **true**: The institution is an OAuth connection. */
  oauthEnabled: boolean;
  /** Institution's forgot password page */
  urlForgotPassword?: string;
  /** Institution's signup page */
  urlOnlineRegistration?: string;
  /** Institution's class */
  mClass?: string;
  /** Special instructions given to customer for login */
  specialText?: string;
  /** Instructions given to the customer before they are sent to the institution website to login for OAuth institutions. <br> <br> **Note**: This helps the customer to provide the proper permission for data needed for the application. */
  specialInstructions?: string[];
  /** The address for the financial institution */
  address?: InstitutionAddress;
  /** Institution's currency */
  currency: string;
  /** The institution’s primary contact email */
  email?: string;
  /** Institution's status: online, offline, maintenance, testing */
  status: string;
  /** The new id for the financial institution’s ID you are replacing. <br> <br> **Note**: This is the same as the `oauthInstitutionId` field, which will eventually be replaced by this field. */
  newInstitutionId?: number;
  /** The branding associated with the institution */
  branding?: GetInstitutionsInstitutionBranding;
  /** The new ID for the OAuth institution’s ID you are replacing. */
  oauthInstitutionId?: number | null;
  [key: string]: unknown;
}

export const institutionSchema: Schema<Institution> = expandoObject({
  id: ['id', bigint()],
  name: ['name', optional(string())],
  transAgg: ['transAgg', boolean()],
  ach: ['ach', boolean()],
  stateAgg: ['stateAgg', boolean()],
  voi: ['voi', boolean()],
  voa: ['voa', boolean()],
  aha: ['aha', boolean()],
  availBalance: ['availBalance', boolean()],
  accountOwner: ['accountOwner', boolean()],
  accountTypeDescription: ['accountTypeDescription', optional(string())],
  phone: ['phone', optional(string())],
  urlHomeApp: ['urlHomeApp', optional(string())],
  urlLogonApp: ['urlLogonApp', optional(string())],
  oauthEnabled: ['oauthEnabled', boolean()],
  urlForgotPassword: ['urlForgotPassword', optional(string())],
  urlOnlineRegistration: ['urlOnlineRegistration', optional(string())],
  mClass: ['class', optional(string())],
  specialText: ['specialText', optional(string())],
  specialInstructions: ['specialInstructions', optional(array(string()))],
  address: ['address', optional(lazy(() => institutionAddressSchema))],
  currency: ['currency', string()],
  email: ['email', optional(string())],
  status: ['status', string()],
  newInstitutionId: ['newInstitutionId', optional(number())],
  branding: [
    'branding',
    optional(lazy(() => getInstitutionsInstitutionBrandingSchema)),
  ],
  oauthInstitutionId: ['oauthInstitutionId', optional(nullable(number()))],
});