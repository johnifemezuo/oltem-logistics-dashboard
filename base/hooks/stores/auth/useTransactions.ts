import { create } from "zustand";
import { ITransaction } from "../../../../components/Pages/Transactions";

export interface ITransactionsStore {
  openTxnModal: boolean;
  setOpenTxnModal: (val: boolean) => void;

  transaction: ITransaction;
  storeTransaction: (transaction: ITransaction | undefined) => void;
}

export const useTransaction = create<ITransactionsStore>((set) => ({
  openTxnModal: false,
  setOpenTxnModal(value: boolean) {
    set(() => ({ openTxnModal: value }));
  },

  transaction: "" as any,
  storeTransaction(data: ITransaction | undefined) {
    set(() => ({ transaction: data }));
  },
}));
