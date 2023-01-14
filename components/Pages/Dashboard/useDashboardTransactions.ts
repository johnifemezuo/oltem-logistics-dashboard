import { useGetRequest, useTotalTransactions } from "../../../base";

export const useDashboardTransactions = () => {
  const { data: totalTransactions, isLoading: tLoading } =
    useTotalTransactions();

  const { data: totalSuccessfulTransfers, isLoading: sLoading } = useGetRequest(
    {
      path: "/transactions/transactions/sum/all?status=completed&type=exchange",
      load: true,
      qureyOptions: {
        // refetchInterval: 10000,
      },
    }
  );

  const { data: totalPendingTransactions, isLoading: pLoading } = useGetRequest(
    {
      path: "/transactions/transactions/sum/all?status=pending&type=exchange",
      load: true,
      qureyOptions: {
        // refetchInterval: 10000,
      },
    }
  );

  const { data: totalFailedTransactions, isLoading: fLoading } = useGetRequest({
    path: "/transactions/transactions/sum/all?status=failed&type=exchange",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const { data: totalUsers, isLoading: userLoading } = useGetRequest({
    path: "/accounts/auth/users?count=true",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const { data: totalActiveUsers, isLoading: aULoading } = useGetRequest({
    path: "/accounts/auth/users?count=true&status=active",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const { data: totalInActiveUsers, isLoading: inULoading } = useGetRequest({
    path: "/accounts/auth/users?count=true&status=inactive",
    load: true,
    qureyOptions: {
      // refetchInterval: 10000,
    },
  });

  const isLoading =
    tLoading ||
    inULoading ||
    sLoading ||
    pLoading ||
    aULoading ||
    userLoading ||
    fLoading;
  return {
    totalTransactions,
    totalPendingTransactions,
    totalSuccessfulTransfers,
    totalFailedTransactions,
    totalUsers,
    totalActiveUsers,
    totalInActiveUsers,
    isLoading,
  };
};
