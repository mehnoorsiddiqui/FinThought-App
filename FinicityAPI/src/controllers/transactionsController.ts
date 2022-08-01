/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GenerateTransactionsReportConstraints,
  generateTransactionsReportConstraintsSchema,
} from '../models/generateTransactionsReportConstraints';
import {
  GenerateTransactionsReportResponse,
  generateTransactionsReportResponseSchema,
} from '../models/generateTransactionsReportResponse';
import {
  GetTransactionsResponse,
  getTransactionsResponseSchema,
} from '../models/getTransactionsResponse';
import { Transaction, transactionSchema } from '../models/transaction';
import { bigint, boolean, optional, string } from '../schema';
import { BaseController } from './baseController';

export class TransactionsController extends BaseController {
  /**
   * Get all transactions available for this customer within the given date range, across all accounts.
   * This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction
   * date is provided), with a maximum of 1000 transactions per request.
   *
   * Standard consumer aggregation provides up to 180 days of transactions prior to the date each account
   * was added to the Finicity system. To access older transactions, you must first call the service Load
   * Historic Transactions for Account.
   *
   * There is no limit for the size of the window between fromDate and toDate; however, the maximum
   * number of transactions returned on one page is 1000.
   *
   * If the value of `moreAvailable` in the response is true, you can retrieve the next page of results
   * by increasing the value of the start parameter in your next request:
   *
   * …&start=6&limit=5
   *
   * @param accept         application/json, application/xml
   * @param customerId     The ID of the customer whose transactions are to be retrieved
   * @param fromDate       Starting timestamp for the date range (required) (see Handling Dates and Times)
   * @param toDate         Ending timestamp for the date range (required, must be greater than fromDate)
   *                                  (see Handling Dates and Times)
   * @param start          Starting index for this page of results
   * @param limit          Maximum number of entries for this page of results (max is 1000)
   * @param sort           Sort order: asc for ascending order (oldest transactions are on page 1), descfor
   *                                  descending order (newest transactions are on page 1).
   * @param includePending true to include pending transactions if available.
   * @return Response from the API call
   */
  async getCustomerTransactionsAll(
    accept: string,
    customerId: bigint,
    fromDate: bigint,
    toDate: bigint,
    start?: bigint,
    limit?: bigint,
    sort?: string,
    includePending?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransactionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      fromDate: [fromDate, bigint()],
      toDate: [toDate, bigint()],
      start: [start, optional(bigint())],
      limit: [limit, optional(bigint())],
      sort: [sort, optional(string())],
      includePending: [includePending, optional(boolean())],
    });
    req.header('Accept', mapped.accept);
    req.query('fromDate', mapped.fromDate);
    req.query('toDate', mapped.toDate);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('sort', mapped.sort);
    req.query('includePending', mapped.includePending);
    req.appendTemplatePath`/aggregation/v3/customers/${mapped.customerId}/transactions`;
    return req.callAsJson(getTransactionsResponseSchema, requestOptions);
  }

  /**
   * Get details for the specified transaction.
   *
   * @param accept        application/json, application/xml
   * @param customerId    Finicity ID for the customer whose transactions are to be retrieved
   * @param transactionId The transaction to be retrieved
   * @return Response from the API call
   */
  async getCustomerTransaction(
    accept: string,
    customerId: string,
    transactionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Transaction>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, string()],
      transactionId: [transactionId, string()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/aggregation/v2/customers/${mapped.customerId}/transactions/${mapped.transactionId}`;
    return req.callAsJson(transactionSchema, requestOptions);
  }

  /**
   * Get all transactions available for this customer account within the given date range. This service
   * supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is
   * provided), with a maximum of 1000 transactions per request.
   *
   * Standard consumer aggregation provides up to 180 days of transactions prior to the date each account
   * was added to the Finicity system. To access older transactions, you must first call the Cash Flow
   * Verification service Load Historic Transactions for Account.
   *
   * There is no limit for the size of the window between fromDate and toDate; however, the maximum
   * number of transactions returned on one page is 1000.
   *
   * If the value of `moreAvailable` in the response is true, you can retrieve the next page of results
   * by increasing the value of the start parameter in your next request:
   *
   * …&start=6&limit=5
   *
   * @param accept         application/json, application/xml
   * @param customerId     The ID of the customer whose transactions are to be retrieved
   * @param accountId      Finicity’s ID of the account whose transactions are to be retrieved
   * @param fromDate       Starting timestamp for the date range (required) (see Handling Dates and Times)
   * @param toDate         Ending timestamp for the date range (required, must be greater than fromDate)
   *                                  (see Handling Dates and Times)
   * @param start          Starting index for this page of results
   * @param limit          Maximum number of entries for this page of results (max is 1000)
   * @param sort           Sort order: asc for ascending order (oldest transactions are on page 1), descfor
   *                                  descending order (newest transactions are on page 1).
   * @param includePending true to include pending transactions if available.
   * @return Response from the API call
   */
  async getCustomerAccountTransactions(
    accept: string,
    customerId: bigint,
    accountId: string,
    fromDate: bigint,
    toDate: bigint,
    start?: bigint,
    limit?: bigint,
    sort?: string,
    includePending?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransactionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      customerId: [customerId, bigint()],
      accountId: [accountId, string()],
      fromDate: [fromDate, bigint()],
      toDate: [toDate, bigint()],
      start: [start, optional(bigint())],
      limit: [limit, optional(bigint())],
      sort: [sort, optional(string())],
      includePending: [includePending, optional(boolean())],
    });
    req.header('Accept', mapped.accept);
    req.query('fromDate', mapped.fromDate);
    req.query('toDate', mapped.toDate);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('sort', mapped.sort);
    req.query('includePending', mapped.includePending);
    req.appendTemplatePath`/aggregation/v3/customers/${mapped.customerId}/accounts/${mapped.accountId}/transactions`;
    return req.callAsJson(getTransactionsResponseSchema, requestOptions);
  }

  /**
   * Generate a Transaction Report for specified accounts under the given customer. This service
   * retrieves up to 24 months of transaction history for the given customer. It then uses this
   * information to generate the Transaction Report.
   *
   * The service returns immediately with status HTTP 202 (Accepted). When finished, a notification will
   * be sent to the specified report callback URL, if specified.
   *
   * This is a premium service. A billable event will be created upon the successful generation of the
   * Transactions Report.
   *
   * After making this call, the client app may wait for a notification to be sent to the Report Listener
   * Service, or it may enter a loop, which should wait 20 seconds and then call the service Get Report
   * to see if the report is finished. While the report is being generated, Get Report will return a
   * minimal report including status inProgress. The loop should repeat every 20 seconds until Get Report
   * returns a different status.
   *
   * A Report Consumer must be created for the given Customer (using Create Report Consumer) before
   * calling this service. If no Report Consumer has been created, the service will return HTTP 400 (Bad
   * Request).
   *
   * There cannot be more than 24 months between fromDate and toDate.
   *
   * @param accept         JSON or XML output.
   * @param callbackUrl    The Report Listener URL to receive
   *                                                                       notifications (optional, must be URL-
   *                                                                       encoded)
   * @param customerId     ID of the customer
   * @param toDate         The ending timestamp for the date range.
   *                                                                       The value must be greater than fromDate. See
   *                                                                       Handling Dates and Times.
   * @param includePending True: Include pending transactions in the
   *                                                                       report. False: Set by default.
   * @param body
   * @return Response from the API call
   */
  async generateTransactionsReport(
    accept: string,
    callbackUrl: string,
    customerId: bigint,
    toDate: bigint,
    includePending: boolean,
    body?: GenerateTransactionsReportConstraints,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GenerateTransactionsReportResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      callbackUrl: [callbackUrl, string()],
      customerId: [customerId, bigint()],
      toDate: [toDate, bigint()],
      includePending: [includePending, boolean()],
      body: [body, optional(generateTransactionsReportConstraintsSchema)],
    });
    req.header('Accept', mapped.accept);
    req.query('callbackUrl', mapped.callbackUrl);
    req.query('toDate', mapped.toDate);
    req.query('includePending', mapped.includePending);
    req.json(mapped.body);
    req.appendTemplatePath`/decisioning/v2/customers/${mapped.customerId}/transactions`;
    return req.callAsJson(
      generateTransactionsReportResponseSchema,
      requestOptions
    );
  }
}