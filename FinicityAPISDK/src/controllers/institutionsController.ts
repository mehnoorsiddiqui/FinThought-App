/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ExpiredTokenError } from '../errors/expiredTokenError';
import {
  GetCertifiedInstitutionsResponse,
  getCertifiedInstitutionsResponseSchema,
} from '../models/getCertifiedInstitutionsResponse';
import {
  GetInstitutionsResponse,
  getInstitutionsResponseSchema,
} from '../models/getInstitutionsResponse';
import { Institution, institutionSchema } from '../models/institution';
import {
  InstitutionBrandingResponse,
  institutionBrandingResponseSchema,
} from '../models/institutionBrandingResponse';
import { bigint, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class InstitutionsController extends BaseController {
  /**
   * Get Certified Institution List w/RSSD
   *
   * @param accept application/json, application/xml
   * @param search Search term, * returns all institutions
   * @param start  Page (Default: 1)
   * @param limit  Limits the number of results returned (max: 1000)
   * @param type   Product types: transAgg, ach, stateAgg, voi, voa, aha, availBalance, accountOwner.
   * @return Response from the API call
   */
  async getCertifiedInstitutionsWithRSSD(
    accept: string,
    search: string,
    start: number,
    limit: number,
    type: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCertifiedInstitutionsResponse>> {
    const req = this.createRequest(
      'GET',
      '/institution/v2/certifiedInstitutions/rssd'
    );
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      search: [search, string()],
      start: [start, number()],
      limit: [limit, number()],
      type: [type, string()],
    });
    req.header('Accept', mapped.accept);
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('type', mapped.type);
    return req.callAsJson(
      getCertifiedInstitutionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Search for all the connected financial institutions (FI) that we support. This returns all the FIs
   * that match the search text for the financial institution’s *name* field.
   * To get a list of all FIs, leave the *search* parameter out of the body of the API call. If the
   * *search* parameter is in the body of the call but has no value, then the call returns an error.
   * If the value for *moreAvailable* in the response is true, you can retrieve the next page of results
   * by increasing the value of the *start* parameter in your next request:
   *
   * 1st Request
   * …start=1&limit=25 (first 25 from list 1-25)
   *
   * 2nd Request
   * …start=2&limit=25 (next 25 from list 26-51)
   *
   * @param accept application/json, application/xml
   * @param search Match the text for the query. URL-encoded required. See Handling Spaces in Queries. <br>
   *                         <br> **Note**: To get a list of all FIs, leave the *search* parameter out of the body of
   *                         the API call. <br>  <br> If the *search* parameter is in the body of the call but has no
   *                         value, then the call returns an error.
   * @param start  The starting page number of records returned. The default is 1. <br> <br>**Example**: If
   *                         the limit for each call is 25, then start=1 returns 1-25 records. If start=2 then records
   *                         26-51 are returned.
   * @param limit  The maximum number of records per page returned for the search request. The default is 25
   *                         records per page.
   * @return Response from the API call
   */
  async getInstitutions(
    accept: string,
    search?: string,
    start?: number,
    limit?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInstitutionsResponse>> {
    const req = this.createRequest('GET', '/institution/v2/institutions');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      search: [search, optional(string())],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
    });
    req.header('Accept', mapped.accept);
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    return req.callAsJson(getInstitutionsResponseSchema, requestOptions);
  }

  /**
   * Search for institutions by certified product.
   *
   * @param accept application/json, application/xml
   * @param search Text to match or * to return all supported institutions.
   * @param start  Starting index for this page of results (ignored if returning all institutions). This
   *                         will default to 1.
   * @param limit  Maximum number of entries for this page of results (ignored if returning all
   *                         institutions). This will default to 25. Limits the number of results returned to 1000.
   * @param type   Product types: transAgg, ach, stateAgg, voi, voa, aha, availBalance, accountOwner.
   * @return Response from the API call
   */
  async getCertifiedInstitutions(
    accept: string,
    search: string,
    start?: number,
    limit?: number,
    type?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetCertifiedInstitutionsResponse>> {
    const req = this.createRequest(
      'GET',
      '/institution/v2/certifiedInstitutions'
    );
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      search: [search, string()],
      start: [start, optional(number())],
      limit: [limit, optional(number())],
      type: [type, optional(string())],
    });
    req.header('Accept', mapped.accept);
    req.query('search', mapped.search);
    req.query('start', mapped.start);
    req.query('limit', mapped.limit);
    req.query('type', mapped.type);
    return req.callAsJson(
      getCertifiedInstitutionsResponseSchema,
      requestOptions
    );
  }

  /**
   * Get details for the specified institution
   *
   * @param accept        application/json, application/xml
   * @param institutionId Finicity’s ID of the institution to retrieve
   * @return Response from the API call
   */
  async getInstitution(
    accept: string,
    institutionId: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Institution>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      institutionId: [institutionId, bigint()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/institution/v2/institutions/${mapped.institutionId}`;
    return req.callAsJson(institutionSchema, requestOptions);
  }

  /**
   * This endpoint returns the branding information for an Institution given the `id`
   *
   * @param accept Replace 'json' with 'xml' if preferred
   * @param id     ID of the institution
   * @return Response from the API call
   */
  async getInstitutionBranding(
    accept: string,
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<InstitutionBrandingResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      id: [id, number()],
    });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/institution/v2/institutions/${mapped.id}/branding`;
    req.throwOn(404, ExpiredTokenError, 'The requested entity was not found');
    return req.callAsJson(institutionBrandingResponseSchema, requestOptions);
  }
}