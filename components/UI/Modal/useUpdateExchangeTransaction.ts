import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { promiseToaster, queryClient, usePatchRequest } from "../../../base";
import { ITransaction } from "../../Pages";

interface IUseTransaction {
  transactionId: string;
}
export const useUpdateExchangeTransaction = ({
  transactionId,
}: IUseTransaction) => {
  const queryKey = [`/transactions/transactions/${transactionId}`, {}];

  const { patch, isLoading, error, data } = usePatchRequest<ITransaction>({
    path: `/transactions/transactions/${transactionId}`,
  });

  const updateCache = (data: { data: ITransaction }) => {
    const oldData: { data: ITransaction } | undefined =
      queryClient.getQueryData(queryKey) as { data: ITransaction };
    oldData.data = data.data;
    queryClient.setQueryData(queryKey, oldData);
  };

  const handleUpdateTransaction = useCallback(
    (status: string) => {
      if (transactionId) {
        promiseToaster(
          patch(
            { status },
            {
              onSuccess(data) {
                updateCache(data);
              },
            }
          )
        );
      } else {
        toast.error("User has no wallet yet");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transactionId]
  );

  return { handleUpdateTransaction, isLoading, data, error };
};
