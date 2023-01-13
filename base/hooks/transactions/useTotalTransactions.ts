import { useGetRequest } from "../request";

export const useTotalTransactions = () => {
  const totalTransactions = useGetRequest({
    path: "/transactions/transactions/sum/all?type=exchange",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  return { ...totalTransactions };
};
