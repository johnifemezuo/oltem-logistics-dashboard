import { useCallback } from "react";
import {
  IUser,
  promiseToaster,
  queryClient,
  usePatchRequest,
} from "../../../base";

export const useBlockUser = ({ userId }: { userId: string }) => {
  const queryKey = [`/accounts/users/${userId}`, {}];
  const { isLoading, data, error, patch } = usePatchRequest<IUser>({
    path: `/accounts/users/${userId}/block`,
  });

  const handleBlockUser = useCallback(
    (reason: string) => {
      promiseToaster(
        patch(
          {
            reason,
          },
          {
            onSuccess(data) {
              console.log(queryKey);
              queryClient.setQueryData(queryKey, (oldData: any) => {
                console.log({ oldData });
                oldData.data = { ...oldData.data, ...data.data };
                return oldData;
              });
            },
          }
        )
      );
    },
    [userId]
  );

  return {
    error,
    isLoading,
    data,
    handleBlockUser,
  };
};
