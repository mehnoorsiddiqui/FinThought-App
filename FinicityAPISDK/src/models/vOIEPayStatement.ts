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
  number,
  Schema,
  string,
} from '../schema';
import { Deduction, deductionSchema } from './deduction';
import { DirectDeposit, directDepositSchema } from './directDeposit';
import { Employee, employeeSchema } from './employee';
import { Employer, employerSchema } from './employer';
import { PayStat, payStatSchema } from './payStat';

export interface VOIEPayStatement {
  /** The pay period of the pay statement. */
  payPeriod: string;
  /** Designates whether the pay statement is billable. */
  billable: boolean;
  /** The asset ID of the stored pay statement */
  assetId: string;
  /** The listed pay date for the pay statement. */
  payDate: bigint;
  /** The beginning of the pay period. */
  startDate: bigint;
  /** The end of the pay period. */
  endDate: bigint;
  /** The total pay after deductions for the employee for the current pay period. */
  netPayCurrent: number;
  /** The total accumulation of pay after deductions for the employee for the current pay year. */
  netPayYTD: number;
  /** The total pay before deductions for the employee for the current pay period. */
  grossPayCurrent: number;
  /** The total accumulation of pay before deductions for the employee for the current pay year. */
  grossPayYTD: number;
  /** The company that provides the pay stub. */
  payrollProvider: string;
  /** Information pertaining to the employer */
  employer: Employer;
  /** Information pertaining to the employee */
  employee: Employee;
  /** Information pertaining to the earnings on the pay statement */
  payStat: PayStat[];
  /** Information pertaining to deductions on the pay statement */
  deductions: Deduction[];
  /** Information pertaining to direct deposits on the pay statement */
  directDeposits: DirectDeposit[];
  [key: string]: unknown;
}

export const vOIEPayStatementSchema: Schema<VOIEPayStatement> = expandoObject({
  payPeriod: ['payPeriod', string()],
  billable: ['billable', boolean()],
  assetId: ['assetId', string()],
  payDate: ['payDate', bigint()],
  startDate: ['startDate', bigint()],
  endDate: ['endDate', bigint()],
  netPayCurrent: ['netPayCurrent', number()],
  netPayYTD: ['netPayYTD', number()],
  grossPayCurrent: ['grossPayCurrent', number()],
  grossPayYTD: ['grossPayYTD', number()],
  payrollProvider: ['payrollProvider', string()],
  employer: ['employer', lazy(() => employerSchema)],
  employee: ['employee', lazy(() => employeeSchema)],
  payStat: ['payStat', array(lazy(() => payStatSchema))],
  deductions: ['deductions', array(lazy(() => deductionSchema))],
  directDeposits: ['directDeposits', array(lazy(() => directDepositSchema))],
});