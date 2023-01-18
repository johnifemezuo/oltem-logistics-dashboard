import { useGetRequest } from "../../../base";

export const useCountries = () => {
  const { data, isLoading } = useGetRequest({
    path: "/rates/countries",
    load: true,
  });

  return { isLoading };
};
