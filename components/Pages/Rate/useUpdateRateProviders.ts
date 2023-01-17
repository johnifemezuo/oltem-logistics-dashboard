import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { promiseToaster, usePatchRequest } from "../../../base";
type IPatchProvider = {
  providerId?: string;
  suspend: boolean;
  isSettlement: boolean;
};

export const useUpdateRateProviders = ({
  providerId,
  suspend,
  isSettlement,
}: IPatchProvider) => {
  const { patch, isLoading } = usePatchRequest({
    path: `/rates/providers/${providerId}`,
  });
  const { handleSubmit, register } = useForm();

  const handlePatch = useCallback(
    (data: any) => {
      if (!providerId) {
        toast.error("You need to select a provider first");
      } else {
        data.is_suspended = suspend ?? false;
        data.includes_settlement = isSettlement ?? false;
        data.rate = Number(data.rate);
        promiseToaster(
          patch(data, {
            onSuccess() {
              setTimeout(() => {
                location.reload();
              }, 500);
            },
          })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [providerId, suspend, isSettlement]
  );

  const updateProviders = handleSubmit(handlePatch);

  return { handlePatch, updateProviders, register, isLoading };
};
