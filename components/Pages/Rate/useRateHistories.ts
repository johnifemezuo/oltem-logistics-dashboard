import { IPagination, useGetRequest } from "../../../base";
import { IProviderRateHistory } from "./rate.interface";

export const useRateHistories = () => {
  const { isLoading, data, nextPage, prevPage } = useGetRequest<{
    providers_rate_histories: IProviderRateHistory[];
    pagination: IPagination;
  }>({
    path: "/rates/histories",
    load: true,
  });

  const providersRateHistories = data?.data?.providers_rate_histories ?? [];
  const pagination = data?.data?.pagination;
  return { isLoading, providersRateHistories, pagination, nextPage, prevPage };
};
