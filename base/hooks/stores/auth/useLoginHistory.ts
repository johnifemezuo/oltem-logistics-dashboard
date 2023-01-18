import { create } from "zustand";


export interface ITransactionsStore {
  openLHistory: boolean;
  setOpenTxnModal: (val: boolean) => void;

  loginHistory: any;
  storeloginHistory: (loginHistory: any | undefined) => void;
}

export const useLoginHistoryStore = create<any>((set: any) => ({
  openLHistory: false,
  setOpenLHistory(value: boolean) {
    set(() => ({ openLHistory: value }));
  },

  loginHistory: "" as any,
  storeloginHistory(data: any | undefined) {
    set(() => ({ loginHistory: data }));
  },
}));
