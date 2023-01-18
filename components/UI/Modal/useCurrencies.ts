import { useGetRequest } from "../../../base";

export const useCurrencies = () => {
  const { data, isLoading } = useGetRequest({
    path: "/rates/currencies",
    load: true,
  });

  return { isLoading };
};
