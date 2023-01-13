export interface AccountSetupInterface extends Record<string, unknown> {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password?: string;
  username?: string;
}

export interface LoginInterface extends Record<string, string> {
  email: string;
  password: string;
}

export interface ICreatePassword extends Record<string, string> {
  password: string;
  confirm_password: string;
}

export interface SignupInterface extends Record<string, unknown> {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  dob?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  country?: string;
  confirm_password?: string;
  phone?: string;
  bvn?: string;
  gender?: string;
}

export interface AccountRegistrationInterface extends Record<string, unknown> {
  username: string;
  dob: string;
  address: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  bvn?: string;
  gender: string;
}

export interface IResetPasswordInterface extends Record<string, string> {
  password: string;
  confirm_password: string;
}

export interface ForgotPasswordInterface extends Record<string, unknown> {
  email: string;
}

export interface VerifyRcInterface extends Record<string, unknown> {
  rc_number: string;
  company_name: string;
}

export interface VerifyRcPayloadInterface extends Record<string, unknown> {
  rc_number: string;
  company_name: string;
}

export interface VerifyBVNInterface extends Record<string, unknown> {
  bvn: string;
}

export interface ChangePasswordInterface extends Record<string, unknown> {
  old_password: string;
  confirm_password: string;
  new_password: string;
}

export interface TransferBankDetailsInterface extends Record<string, unknown> {
  amount: string;
  routing_number: string;
  bank_name: string;
}

export interface AccountInformationInterface extends Record<string, unknown> {
  account_name: string;
  account_number: string;
}

export interface BeneficiaryInformationInterface
  extends Record<string, unknown> {
  beneficiary_name: string;
  beneficiary_address: string;
  beneficiary_disctrict: string;
  beneficiary_postal: string;
}
