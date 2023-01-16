import { useGetRequest } from "../../../../base";
import { IWallet } from "../user.interface";

export const useUserWallet = (userId: string) => {
  const { data, isLoading, isError, isFetching } = useGetRequest<IWallet>({
    load: userId ? true : false,
    path: `/wallets/wallets/users/${userId}/details`,
  });

  const wallet: Partial<IWallet> = isError ? {} : (data?.data as IWallet);

  return { wallet, isLoading, isFetching, isError };
};
