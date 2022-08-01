# Get Reports by Consumer

```ts
const getReportsByConsumerController = new GetReportsByConsumerController(client);
```

## Class Name

`GetReportsByConsumerController`

## Methods

* [Get Cash Flow Report Personal](../../doc/controllers/get-reports-by-consumer.md#get-cash-flow-report-personal)
* [Get Pay Statement by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-pay-statement-by-consumer)
* [Get Prequalification Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-prequalification-report-by-consumer)
* [Get Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-report-by-consumer)
* [Get Reports by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-reports-by-consumer)
* [Get Statement Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-statement-report-by-consumer)
* [Get Transactions Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-transactions-report-by-consumer)
* [Get VOA Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voa-report-by-consumer)
* [Get VOA With Income Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voa-with-income-report-by-consumer)
* [Get VOE - Payroll Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voe---payroll-report-by-consumer)
* [Get VOE - Transactions Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voe---transactions-report-by-consumer)
* [Get VOI Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voi-report-by-consumer)
* [Get VOIE - Payroll Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voie---payroll-report-by-consumer)
* [Get VOIE - Paystub Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voie---paystub-report-by-consumer)
* [Get VOIE - Paystub With TXVerify Report by Consumer](../../doc/controllers/get-reports-by-consumer.md#get-voie---paystub-with-txverify-report-by-consumer)


# Get Cash Flow Report Personal

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

```ts
async getCashFlowReportPersonal(
  accept: string,
  consumerId: string,
  reportId: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CashFlowRecordPersonal>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | `application`/`json` |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CashFlowRecordPersonal`](../../doc/models/cash-flow-record-personal.md)

## Example Usage

```ts
const accept = 'application/json';
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = 'rceiqx616awa';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getCashFlowReportPersonal(accept, consumerId, reportId, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Pay Statement by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPayStatementByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayStatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PayStatementReportRecord`](../../doc/models/pay-statement-report-record.md)

## Example Usage

```ts
const consumerId = 'cb1ca7514739c7c7e18b576581e42e82';
const reportId = 'kfyd4c77ianm-paystatement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getPayStatementByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Prequalification Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getPrequalificationReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrequalificationReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrequalificationReportResponse`](../../doc/models/prequalification-report-response.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = '88w4fbssrbja-prequalvoa';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getPrequalificationReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditableReport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuditableReport`](../../doc/models/auditable-report.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Reports by Consumer

Get a list of reports that have been generated for the given consumer.

The status fields in the returned list will contain inProgress, failure, or success. If a status shows inProgress, wait 20 seconds and then call again.

```ts
async getReportsByConsumer(
  consumerId: string,
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportSummaries>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportSummaries`](../../doc/models/report-summaries.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getReportsByConsumer(consumerId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Statement Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getStatementReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatementReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatementReportRecord`](../../doc/models/statement-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = '38dknche83oh-statement';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getStatementReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get Transactions Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getTransactionsReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionsReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | JSON or  XML |
| `contentType` | `string` | Header, Required | JSON or  XML |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionsReportRecord`](../../doc/models/transactions-report-record.md)

## Example Usage

```ts
const consumerId = 'cb1ca7514739c7c7e18b576581e42e82';
const reportId = 'kfyd4c77ianm-transactions';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getTransactionsReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOA Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAReportRecord`](../../doc/models/voa-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'dgww4v7zsmy0';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOAReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOA With Income Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOAWithIncomeReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOAWithIncomeReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOAWithIncomeReportRecord`](../../doc/models/voa-with-income-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'm7vk4btjvwtb';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOAWithIncomeReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOE - Payroll Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOEPayrollReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOEPayrollReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOEPayrollReportRecord`](../../doc/models/voe-payroll-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voiepayroll';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOEPayrollReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOE - Transactions Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOETransactionsReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOETransactionsReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOETransactionsReportRecord`](../../doc/models/voe-transactions-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voiepayroll';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOETransactionsReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOI Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIReportRecord`](../../doc/models/voi-report-record.md)

## Example Usage

```ts
const consumerId = '33a7e09040b867cced223acf96796391';
const reportId = 'nez710uwgi1a-voi';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOIReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOIE - Payroll Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIEPayrollReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPayrollReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPayrollReportRecord`](../../doc/models/voie-payroll-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voiepayroll';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOIEPayrollReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOIE - Paystub Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIEPaystubReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubReportRecord`](../../doc/models/voie-paystub-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voietxverify';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOIEPaystubReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |


# Get VOIE - Paystub With TXVerify Report by Consumer

Get a report that has been generated by calling one of the Generate Report services.

The report's status field will contain inProgress, failure, or success. If the status shows inProgress, the client app should wait 20 seconds and then call again to see if the report is finished.

See Permissible Purpose Codes for a list of permissible purposes for retrieving a report.

```ts
async getVOIEPaystubWithTxverifyReportByConsumer(
  consumerId: string,
  reportId: string,
  accept: string,
  contentType: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VOIEPaystubWithTxverifyReportRecord>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerId` | `string` | Template, Required | Finicity’s ID of the consumer (UUID with max length 32 characters) |
| `reportId` | `string` | Template, Required | Finicity’s ID of the report |
| `accept` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `contentType` | `string` | Header, Required | Replace 'json' with 'xml' if preferred |
| `onBehalfOf` | `string \| undefined` | Query, Optional | The name of the entity you are retrieving the report on behalf of. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VOIEPaystubWithTxverifyReportRecord`](../../doc/models/voie-paystub-with-txverify-report-record.md)

## Example Usage

```ts
const consumerId = 'b06cf32dd2222b32e31083221063f561';
const reportId = '41h4nzppn37u-voietxverify';
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await getReportsByConsumerController.getVOIEPaystubWithTxverifyReportByConsumer(consumerId, reportId, accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`Error1Error`](../../doc/models/error-1-error.md) |
