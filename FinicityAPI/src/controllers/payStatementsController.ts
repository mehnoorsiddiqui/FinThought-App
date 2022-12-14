/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  StorePayStatementRequest,
  storePayStatementRequestSchema,
} from '../models/storePayStatementRequest';
import {
  StorePayStatementResponse,
  storePayStatementResponseSchema,
} from '../models/storePayStatementResponse';
import { bigint, string } from '../schema';
import { BaseController } from './baseController';

export class PayStatementsController extends BaseController {
  /**
   * Services to store a pay statement for a customer. Within the body of the request, the base 64
   * encoded value of the pay statement must be passed with a label.
   *
   * @param finicityAppKey     Finicity-App-Key from Developer Portal
   * @param finicityAppToken   Token returned from Partner Authentication
   * @param customerId         Finicity's ID of the customer
   * @param body               The base 64 encoded value of the pay statement and
   *                                                              pay statement label.
   * @return Response from the API call
   */
  async storeCustomerPayStatement(
    finicityAppKey: string,
    finicityAppToken: string,
    customerId: bigint,
    body: StorePayStatementRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StorePayStatementResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      finicityAppKey: [finicityAppKey, string()],
      finicityAppToken: [finicityAppToken, string()],
      customerId: [customerId, bigint()],
      body: [body, storePayStatementRequestSchema],
    });
    req.header('Finicity-App-Key', mapped.finicityAppKey);
    req.header('Finicity-App-Token', mapped.finicityAppToken);
    req.json(mapped.body);
    req.appendTemplatePath`/aggregation/v1/customers/${mapped.customerId}/payStatements`;
    return req.callAsJson(storePayStatementResponseSchema, requestOptions);
  }
}
