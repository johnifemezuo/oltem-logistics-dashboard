import { IBase } from "../../../base";

export interface IRate extends IBase {}
export interface IProviderRateHistory extends IBase {
  name: string;
  rate: number;
  slug: string;
  is_suspended: boolean;
  includes_settlement: boolean;
}
