import { IPagination } from "../../../../base";

export interface ITransaction {
  id: string;
  trxn_id: string;
  user_id: string;
  bank_name: null;
  transaction_type_id: string;
  currency_id: string;
  transaction_status_id: string;
  beneficiary_id: null;
  invoice_document_id: null;
  crypto_liquidity_purchase_id: null;
  fiat_liquidity_purchase_id: null;
  rail_settlement_id: null;
  created_at: Date;
  updated_at: Date;
  sender_name: string;
  amount: string;
}

export interface ITransactionData {
  transactions: ITransaction[];
  pagination: IPagination;
}
