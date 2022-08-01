/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

/** The consumer birth date */
export interface Birthday {
  /** The birthday 4-digit year */
  year?: number;
  /** The birthday 2-digit month (01 is January) */
  month?: number;
  /** The birthday 2-digit day-of-month */
  dayOfMonth?: number;
  [key: string]: unknown;
}

export const birthdaySchema: Schema<Birthday> = expandoObject({
  year: ['year', optional(number())],
  month: ['month', optional(number())],
  dayOfMonth: ['dayOfMonth', optional(number())],
});