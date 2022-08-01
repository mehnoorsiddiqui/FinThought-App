/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface OptionalConsumerInformation {
  /** (MVS-optional) The full SSN without hyphens that matches the consumer’s SSN. */
  ssn: string;
  [key: string]: unknown;
}

export const optionalConsumerInformationSchema: Schema<OptionalConsumerInformation> = expandoObject(
  { ssn: ['ssn', string()] }
);