import { IPagination, useGetRequest } from "../../../base";
import { IProvider } from "./rate.interface";
export const useGetRateProviders = () => {
  const { isLoading, data } = useGetRequest<{
    pagination: IPagination;
    providers: IProvider[];
  }>({
    load: true,
    path: "/rates/providers",
  });

  const providers = data?.data?.providers ?? [];
  const pagination = data?.data?.pagination;

  return { isLoading, pagination, providers };
};
