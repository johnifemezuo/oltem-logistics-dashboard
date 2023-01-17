import { IBase } from "../../../base";

export interface IRate extends IBase {}
export interface IProviderRateHistory extends IBase {
  name: string;
  rate: number;
  slug: string;
  is_suspended: boolean;
  includes_settlement: boolean;
}

export interface IProvider extends IBase {
  name: string;
  rate: number;
  slug: string;
  includes_settlement: boolean;
  is_suspended: boolean;
}
