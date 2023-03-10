import { IBase } from "../../../base.interface";

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  dob: Date;
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
  kyc_verified: boolean;
}
