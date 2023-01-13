import { create } from "zustand";

export interface ITransactionsInfo {
  openTxnModal: boolean;
  setOpenTxnModal: (val: boolean) => void;

  transactionDetails: any;
  storetransactionDetails: (userData: any | undefined) => void;
}

export const useTransactionInfoStore = create<ITransactionsInfo>((set) => ({
  openTxnModal: false,
  setOpenTxnModal(value: boolean) {
    set(() => ({ openTxnModal: value }));
  },

  transactionDetails: "" as any,
  storetransactionDetails(data: any) {
    set(() => ({ transactionDetails: data }));
  },
}));
