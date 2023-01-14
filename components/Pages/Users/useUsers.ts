import { IPagination, IUser, useGetRequest } from "../../../base";

export const useUsers = () => {
  const { data, isLoading, isFetching, page, nextPage, isError, prevPage } = useGetRequest<{
    users: IUser[];
    pagination: IPagination;
  }>({
    load: true,
    path: "/accounts/users",
  });

  const users: IUser[] = data?.data.users ?? [];
  const pagination = isError ? [] : data?.data.pagination;

  return { users, pagination, page, nextPage, prevPage, isFetching, isLoading };
};
