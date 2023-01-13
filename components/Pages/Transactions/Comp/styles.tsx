import tw from "tailwind-styled-components";

export const TxnList = tw.li`
  bg-white hover:bg-blue-50/30 cursor-pointer px-2 relative py-5 flex--items space-x-5 justify-between
` as any;

export const TxnTititleWrap = tw.li`
  w-full px-4 py-2 text-sm mt-1 font-medium text-zinc-600  bg-app-bg border
` as any;
