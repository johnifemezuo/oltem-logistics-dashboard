import { IBase } from "../base.interface";

export interface IBeneficiary extends IBase {
  user_id: string;
  currency_id: string;
  country_id: string;
  fullname: string;
  account_number: string;
  bank_name?: string;
  routing_number: string;
  swift_code?: string;
  phone: string;
  email?: string;
  address?: string;
  is_saved: boolean;
  deleted_at?: Date;
  country?: ICountry;
}

export interface ICountry extends IBase{
  name: string;
}
