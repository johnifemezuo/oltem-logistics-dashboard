import { useGetRequest } from "../../../../base";
import { IUser } from "../user.interface";

export const useUserDetails = (userId: string) => {
  let { data, isLoading, isError, isFetching } = useGetRequest<IUser>({
    load: userId ? true : false,
    path: `/accounts/users/${userId}`,
  });

  const user: Partial<IUser> =
    isError || isLoading ? {} : (data?.data as IUser);

  isLoading = !user || isLoading ? true : false;
  return { user, isLoading, isFetching, isError };
};
