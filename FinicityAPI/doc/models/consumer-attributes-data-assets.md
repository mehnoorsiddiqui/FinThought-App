
# Consumer Attributes Data Assets

## Structure

`ConsumerAttributesDataAssets`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`ConsumerAttributesAssetsCustomer`](../../doc/models/consumer-attributes-assets-customer.md) | Required | - |
| `account` | [`ConsumerAttributesAssetsAccount`](../../doc/models/consumer-attributes-assets-account.md) | Required | - |

## Example (as JSON)

```json
{
  "customer": {
    "monthlyMinimumBalance": {
      "2021-03-31": 20841.81,
      "2021-04-30": 16014.16,
      "2021-05-31": 16949.55,
      "2021-06-30": 645.01,
      "2021-07-31": 702.33,
      "2021-08-31": -18.89,
      "2021-09-30": -1346.13,
      "2021-10-31": -1288.81,
      "2021-11-30": -1231.49,
      "2021-12-31": -1952.71,
      "2022-01-31": 14614.31,
      "2022-02-28": 19705.31
    },
    "monthlyMaximumBalance": {
      "2021-03-31": 26321.24,
      "2021-04-30": 26528.01,
      "2021-05-31": 25110.12,
      "2021-06-30": 22676.89,
      "2021-07-31": 22889.45,
      "2021-08-31": 24431.44,
      "2021-09-30": 26144.03,
      "2021-10-31": 30679.71,
      "2021-11-30": 29099.98,
      "2021-12-31": 52998.24,
      "2022-01-31": 28163.22,
      "2022-02-28": 26827.62
    },
    "monthlyAverageBalance": {
      "2021-03-31": 23166.96,
      "2021-04-30": 21500.16,
      "2021-05-31": 21079.24,
      "2021-06-30": 17207.09,
      "2021-07-31": 17680.23,
      "2021-08-31": 20177.06,
      "2021-09-30": 21624.44,
      "2021-10-31": 23147.34,
      "2021-11-30": 23024.08,
      "2021-12-31": 23156.56,
      "2022-01-31": 20371.3,
      "2022-02-28": 22523.83
    },
    "monthlyStandardDeviationOfBalance": {
      "2021-03-31": 1581.38,
      "2021-04-30": 3880.2,
      "2021-05-31": 2324.47,
      "2021-06-30": 4828.27,
      "2021-07-31": 5078.26,
      "2021-08-31": 5921.8,
      "2021-09-30": 6092.64,
      "2021-10-31": 7479.2,
      "2021-11-30": 6979.12,
      "2021-12-31": 10374.49,
      "2022-01-31": 3116.12,
      "2022-01-28": 2326.82
    },
    "monthlyDaysWithPositiveBalance": {
      "2021-03-31": 21,
      "2021-04-30": 21,
      "2021-05-31": 19,
      "2021-06-30": 17,
      "2021-07-31": 17,
      "2021-08-31": 14,
      "2021-09-30": 18,
      "2021-10-31": 13,
      "2021-11-30": 15,
      "2021-12-31": 16,
      "2022-01-31": 15,
      "2022-02-28": 22
    },
    "monthlyDaysWithNegativeBalance": {
      "2021-03-31": 0,
      "2021-04-30": 0,
      "2021-05-31": 0,
      "2021-06-30": 0,
      "2021-07-31": 0,
      "2021-08-31": 1,
      "2021-09-30": 1,
      "2021-10-31": 1,
      "2021-11-30": 1,
      "2021-12-31": 1,
      "2022-01-31": 0,
      "2022-02-28": 0
    },
    "monthlyTwoMonthAverageBalance": {
      "2021-03-31": 22845.4,
      "2021-04-30": 22333.56,
      "2021-05-31": 21289.7,
      "2021-06-30": 19143.17,
      "2021-07-31": 17443.66,
      "2021-08-31": 18928.64,
      "2021-09-30": 20900.75,
      "2021-10-31": 22385.89,
      "2021-11-30": 23085.71,
      "2021-12-31": 23090.32,
      "2022-01-31": 21763.93,
      "2022-02-28": 24573.46
    },
    "monthlySixMonthAverageBalance": {
      "2021-03-31": 28794.93,
      "2021-04-30": 25860.09,
      "2021-05-31": 23895.76,
      "2021-06-30": 22016.73,
      "2021-07-31": 20526.25,
      "2021-08-31": 20135.12,
      "2021-09-30": 19878.04,
      "2021-10-31": 20152.57,
      "2021-11-30": 20476.71,
      "2021-12-31": 21468.29,
      "2022-01-31": 21916.8,
      "2022-02-28": 32063.74
    },
    "twelveMonthAverageBalance": {
      "2021-03-31": 33677.33,
      "2021-04-30": 32656.57,
      "2021-05-31": 31325.31,
      "2021-06-30": 29758.99,
      "2021-07-31": 27896.6,
      "2021-08-31": 26099.43,
      "2021-09-30": 24336.49,
      "2021-10-31": 23006.33,
      "2021-11-30": 22186.24,
      "2021-12-31": 21742.51,
      "2022-01-31": 21221.53,
      "2022-02-28": 34637.95
    },
    "twoMonthStandardDeviationOfBalance": {
      "2021-03-31": 1954.1,
      "2021-04-30": 2730.79,
      "2021-05-30": 3102.33,
      "2021-06-31": 3576.37,
      "2021-07-31": 4953.27,
      "2021-08-31": 5500.03,
      "2021-09-30": 6007.22,
      "2021-10-31": 6785.92,
      "2021-11-30": 7229.16,
      "2021-12-31": 8676.8,
      "2022-01-31": 6745.3,
      "2022-02-28": 3236.86
    },
    "sixMonthStandardDeviationOfBalance": {
      "2021-03-31": 3004.4,
      "2021-04-30": 3010.97,
      "2021-05-31": 2975.17,
      "2021-06-30": 3181.34,
      "2021-07-31": 3336.57,
      "2021-08-31": 3935.73,
      "2021-09-30": 4687.61,
      "2021-10-31": 5287.44,
      "2021-11-30": 6063.22,
      "2021-12-31": 6987.58,
      "2022-01-31": 6660.56,
      "2022-02-28": 3023.26
    },
    "twelveMonthStandardDeviationOfBalance": {
      "2021-03-31": 2799.08,
      "2021-04-30": 2947.63,
      "2021-05-31": 2863.37,
      "2021-06-30": 3065.62,
      "2021-07-31": 3224.32,
      "2021-08-31": 3479.49,
      "2021-09-30": 3846,
      "2021-10-31": 4149.2,
      "2021-11-30": 4519.19,
      "2021-12-31": 5084.46,
      "2022-01-31": 4998.56,
      "2022-02-28": 2871.45
    }
  },
  "account": {
    "monthlyClosingBalance": {
      "2021-03-31": 20841.81,
      "2021-04-30": 16014.16,
      "2021-05-31": 16949.55,
      "2021-06-30": 645.01,
      "2021-07-31": 702.33,
      "2021-08-31": -18.89,
      "2021-09-30": -1346.13,
      "2021-10-31": -1288.81,
      "2021-11-30": -1231.49,
      "2021-12-31": -1952.71,
      "2022-01-31": 14614.31,
      "2022-02-28": 19705.31
    },
    "monthlyMinimumBalance": {
      "2021-03-31": 20841.81,
      "2021-04-30": 16014.16,
      "2021-05-31": 16949.55,
      "2021-06-30": 645.01,
      "2021-07-31": 702.33,
      "2021-08-31": -18.89,
      "2021-09-30": -1346.13,
      "2021-10-31": -1288.81,
      "2021-11-30": -1231.49,
      "2021-12-31": -1952.71,
      "2022-01-31": 14614.31,
      "2022-02-28": 19705.31
    },
    "monthlyMaximumBalance": {
      "2021-03-31": 26321.24,
      "2021-04-30": 26528.01,
      "2021-05-31": 25110.12,
      "2021-06-30": 22676.89,
      "2021-07-31": 22889.45,
      "2021-08-31": 24431.44,
      "2021-09-30": 26144.03,
      "2021-10-31": 30679.71,
      "2021-11-30": 29099.98,
      "2021-12-31": 52998.24,
      "2022-01-31": 28163.22,
      "2022-02-28": 26827.62
    },
    "monthlyAverageBalance": {
      "2021-03-31": 23166.96,
      "2021-04-30": 21500.16,
      "2021-05-31": 21079.24,
      "2021-06-30": 17207.09,
      "2021-07-31": 17680.23,
      "2021-08-31": 20177.06,
      "2021-09-30": 21624.44,
      "2021-10-31": 23147.34,
      "2021-11-30": 23024.08,
      "2021-12-31": 23156.56,
      "2022-01-31": 20371.3,
      "2022-02-28": 22523.83
    },
    "monthlyStandardDeviationOfBalance": {
      "2021-03-31": 1581.38,
      "2021-04-30": 3880.2,
      "2021-05-31": 2324.47,
      "2021-06-30": 4828.27,
      "2021-07-31": 5078.26,
      "2021-08-31": 5921.8,
      "2021-09-30": 6092.64,
      "2021-10-31": 7479.2,
      "2021-11-30": 6979.12,
      "2021-12-31": 10374.49,
      "2022-01-31": 3116.12,
      "2022-02-28": 2326.82
    },
    "monthlyDaysWithPositiveBalance": {
      "2021-03-31": 21,
      "2021-04-30": 21,
      "2021-05-31": 19,
      "2021-06-30": 17,
      "2021-07-31": 17,
      "2021-08-31": 14,
      "2021-09-30": 18,
      "2021-10-31": 13,
      "2021-11-30": 15,
      "2021-12-31": 16,
      "2022-01-31": 15,
      "2022-02-28": 22
    },
    "monthlyDaysWithNegativeBalance": {
      "2021-03-31": 0,
      "2021-04-30": 0,
      "2021-05-31": 0,
      "2021-06-30": 0,
      "2021-07-31": 0,
      "2021-08-31": 1,
      "2021-09-30": 1,
      "2021-10-31": 1,
      "2021-11-30": 1,
      "2021-12-31": 1,
      "2022-01-31": 0,
      "2022-02-28": 0
    },
    "monthlyTwoMonthAverageBalance": {
      "2021-03-31": 22845.4,
      "2021-04-30": 22333.56,
      "2021-05-31": 21289.7,
      "2021-06-30": 19143.17,
      "2021-07-31": 17443.66,
      "2021-08-31": 18928.64,
      "2021-09-30": 20900.75,
      "2021-10-31": 22385.89,
      "2021-11-30": 23085.71,
      "2021-12-31": 23090.32,
      "2022-01-31": 21763.93,
      "2022-02-28": 24573.46
    },
    "monthlySixMonthAverageBalance": {
      "2021-03-31": 28794.93,
      "2021-04-30": 25860.09,
      "2021-05-31": 23895.76,
      "2021-06-30": 22016.73,
      "2021-07-31": 20526.25,
      "2021-08-31": 20135.12,
      "2021-09-30": 19878.04,
      "2021-10-31": 20152.57,
      "2021-11-30": 20476.71,
      "2021-12-31": 21468.29,
      "2022-01-31": 21916.8,
      "2022-02-28": 32063.74
    },
    "twelveMonthAverageBalance": {
      "2021-03-31": 33677.33,
      "2021-04-30": 32656.57,
      "2021-05-31": 31325.31,
      "2021-06-30": 29758.99,
      "2021-07-31": 27896.6,
      "2021-08-31": 26099.43,
      "2021-09-30": 24336.49,
      "2021-10-31": 23006.33,
      "2021-11-30": 22186.24,
      "2021-12-31": 21742.51,
      "2022-01-31": 21221.53,
      "2022-02-28": 34637.95
    },
    "twoMonthStandardDeviationOfBalance": {
      "2021-03-31": 1954.1,
      "2021-04-30": 2730.79,
      "2021-05-31": 3102.33,
      "2021-06-30": 3576.37,
      "2021-07-31": 4953.27,
      "2021-08-31": 5500.03,
      "2021-09-30": 6007.22,
      "2021-10-31": 6785.92,
      "2021-11-30": 7229.16,
      "2021-12-31": 8676.8,
      "2022-01-31": 6745.3,
      "2022-02-28": 3236.86
    },
    "sixMonthStandardDeviationOfBalance": {
      "2021-03-31": 3004.4,
      "2021-04-30": 3010.97,
      "2021-05-31": 2975.17,
      "2021-06-30": 3181.34,
      "2021-07-31": 3336.57,
      "2021-08-31": 3935.73,
      "2021-09-30": 4687.61,
      "2021-10-31": 5287.44,
      "2021-11-30": 6063.22,
      "2021-12-31": 6987.58,
      "2022-01-31": 6660.56,
      "2022-02-28": 3023.26
    },
    "twelveMonthStandardDeviationOfBalance": {
      "2021-03-31": 2799.08,
      "2021-04-30": 2947.63,
      "2021-05-31": 2863.37,
      "2021-06-30": 3065.62,
      "2021-07-31},": 3224.32,
      "2021-08-31": 3479.49,
      "2021-09-30": 3846,
      "2021-10-31": 4149.2,
      "2021-11-30": 4519.19,
      "2021-12-31": 5084.46,
      "2022-01-31": 4998.56,
      "2022-02-28": 2871.45
    }
  }
}
```
