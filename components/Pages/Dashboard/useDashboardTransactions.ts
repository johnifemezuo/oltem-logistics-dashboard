import { useGetRequest } from "../../../base";

export const useDashboardTransactions = () => {
  const { data: totalTransactions } = useGetRequest({
    path: "/transactions/transactions/sum/all?type=exchange",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const { data: totalSuccessfulTransfers } = useGetRequest({
    path: "/transactions/transactions/sum/all?status=completed&type=exchange",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const { data: totalSuccessfulTransactions } = useGetRequest({
    path: "/transactions/transactions/sum/all?status=completed",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  return {
    totalTransactions,
    totalSuccessfulTransactions,
    totalSuccessfulTransfers,
  };
};
