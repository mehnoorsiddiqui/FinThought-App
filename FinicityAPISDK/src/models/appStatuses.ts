/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, expandoObject, lazy, Schema } from '../schema';
import { AppStatus, appStatusSchema } from './appStatus';

/** The response for the Get App Registration Status endpoint which returns an array of App Status objects to be able to determine their registration status. This is version 2 of this response. */
export interface AppStatuses {
  /** Total number of applications in query */
  totalRecords: bigint;
  /** Total number of pages in application query for size of results per page */
  totalPages: bigint;
  /** The page number returned as per the application query */
  pageNumber: bigint;
  /** The number of records per page as per the application query */
  numberOfRecordsPerPage: bigint;
  /** List of applications with their status information */
  applications: AppStatus[];
  [key: string]: unknown;
}

export const appStatusesSchema: Schema<AppStatuses> = expandoObject({
  totalRecords: ['totalRecords', bigint()],
  totalPages: ['totalPages', bigint()],
  pageNumber: ['pageNumber', bigint()],
  numberOfRecordsPerPage: ['numberOfRecordsPerPage', bigint()],
  applications: ['applications', array(lazy(() => appStatusSchema))],
});