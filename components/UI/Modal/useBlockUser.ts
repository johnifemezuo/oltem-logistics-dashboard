import { useCallback } from "react";
import { promiseToaster, usePostRequest } from "../../../base";

export const useBlockUser = ({ userId }: { userId: string }) => {
  const { isLoading, data, error, post } = usePostRequest({
    path: "/accounts/users/block/blockUsePath",
  });

  const handleBlockUser = useCallback((reason: string) => {
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
    handleBlockUser,
  };
};
