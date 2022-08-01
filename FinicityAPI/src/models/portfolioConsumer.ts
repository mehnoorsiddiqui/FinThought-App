/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { Birthday, birthdaySchema } from './birthday';

export interface PortfolioConsumer {
  /** Finicity ID of the consumer (UUID with max length 32 characters) */
  id: string;
  /** The consumer first name(s) / given name(s) */
  firstName: string;
  /** The consumer last name(s) / surname(s) */
  lastName: string;
  /** Finicity's ID of the customer */
  customerId: bigint;
  /** The consumer’s 9-digit Social Security number (may include separators: nnn-nn-nnnn) */
  ssn: string;
  /** The consumer birth date */
  birthday: Birthday;
  /** The consumer suffix */
  suffix?: string;
  [key: string]: unknown;
}

export const portfolioConsumerSchema: Schema<PortfolioConsumer> = expandoObject(
  {
    id: ['id', string()],
    firstName: ['firstName', string()],
    lastName: ['lastName', string()],
    customerId: ['customerId', bigint()],
    ssn: ['ssn', string()],
    birthday: ['birthday', lazy(() => birthdaySchema)],
    suffix: ['suffix', optional(string())],
  }
);