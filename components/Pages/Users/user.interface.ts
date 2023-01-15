import { IBase } from "../../../base";

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  dob: Date;
  password: string;
  phone: string;
  phone_verified?: boolean;
  email: string;
  email_verified?: boolean;
  bvn: string;
  bvn_verified?: boolean;
  is_active?: boolean;
  gender: string;
  marital_status?: string;
  deleted_at?: Date;
  profile_pics?: string;
}


export interface IWallet extends IBase {
  user_id: string;
  is_active?: boolean;
  ledger_balance?: number;
  available_balance?: number;
  account_number: string;
  account_name: string;
  bank_name: string;
}
