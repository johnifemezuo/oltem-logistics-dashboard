import { useCallback } from "react";
import {
  IUser,
  promiseToaster,
  queryClient,
  usePatchRequest,
} from "../../../base";

export const useUnblockUser = ({ userId }: { userId: string }) => {
  const queryKey = [`/accounts/users/${userId}`, {}];
  const { isLoading, data, error, patch } = usePatchRequest<IUser>({
    path: `/accounts/users/${userId}/unblock`,
  });

  const handleUnblockUser = useCallback(() => {
    promiseToaster(
      patch(
        {},
        {
          onSuccess(data) {
            queryClient.setQueryData(queryKey, (oldData: any) => {
              oldData.data = { ...oldData.data, ...data.data };
              return oldData;
            });
          },
        }
      )
    );
  }, [userId]);

  return {
    error,
    isLoading,
    data,
    handleUnblockUser,
  };
};
