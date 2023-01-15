import { useCallback } from "react";
import { promiseToaster, usePostRequest } from "../../../base";

export const useBlockUserWallet = ({ userId }: { userId: string }) => {
  const { isLoading, data, error, post } = usePostRequest({
    path: "/wallets/users/block/blockUsePath",
  });

  const handleBlockUserWallet = useCallback((reason: string) => {
    promiseToaster(
      post({
        reason,
        user_id: userId,
      })
    );
  }, []);

  return {
    error,
    isLoading,
    data,
    handleBlockUserWallet,
  };
};
