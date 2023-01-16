import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { promiseToaster, queryClient, usePatchRequest } from "../../../base";
import { IWallet } from "../../Pages/Users/user.interface";

export const useUserWalletManagement = ({
  walletId,
  userId,
}: {
  walletId: string | undefined;
  userId: string | undefined;
}) => {
  const queryKey = [`/wallets/wallets/users/${userId}/details`, {}];
  const {
    isLoading: isBlocking,
    data: blockData,
    error: blockError,
    patch: blockPatch,
  } = usePatchRequest<IWallet>({
    path: `/wallets/wallets/${walletId}/deactivate`,
  });
  const {
    isLoading: isUnblocking,
    data: unblockData,
    error: unblockError,
    patch: unblockPatch,
  } = usePatchRequest<IWallet>({
    path: `/wallets/wallets/${walletId}/activate`,
  });

  const updateCache = (data: { data: IWallet }) => {
    const oldData: { data: IWallet } | undefined = queryClient.getQueryData(
      queryKey
    ) as { data: IWallet };
    oldData.data = data.data;
    queryClient.setQueryData(queryKey, oldData);
  };

  const handleBlockUserWallet = useCallback(
    (reason: string) => {
      if (walletId) {
        promiseToaster(
          blockPatch(
            { reason },
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
    [walletId]
  );

  const handleUnBlockUserWallet = useCallback(() => {
    if (walletId) {
      promiseToaster(
        unblockPatch(
          {},
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletId]);

  return {
    blockError,
    isBlocking,
    blockData,
    isUnblocking,
    unblockData,
    unblockError,
    handleBlockUserWallet,
    handleUnBlockUserWallet,
  };
};
