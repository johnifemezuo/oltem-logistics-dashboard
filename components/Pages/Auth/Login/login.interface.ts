import { IUser } from "../../../../base";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  statusCode: number;
  message: string;
  data: ILoginData;
}

export interface ILoginData {
  user: IUser;
  auth_token: string;
  login_history: LoginHistory;
  kyc_verified: boolean;
}

interface LoginHistory {
  id: string;
  last_login: string;
  user_id: string;
  device_id: string;
  location_id: string;
  created_at: string;
  updated_at: string;
  location: Location;
  device: Device;
}

interface Device {
  id: string;
  os: string;
  os_version: string;
  client: string;
  client_version: string;
  device_type: string;
  device_brand: string;
  device_model: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface Location {
  id: string;
  location: string;
  latitude: string;
  longitude: string;
  ip_address: string;
  country: string;
  region: string;
  isp: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}
