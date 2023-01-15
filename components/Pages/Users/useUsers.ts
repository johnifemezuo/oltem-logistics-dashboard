import { useEffect, useState } from "react";
import { useDebounce } from "use-lodash-debounce";
import { IPagination, IUser, useGetRequest } from "../../../base";

export const useUsers = () => {
  const {
    data,
    isLoading,
    isFetching,
    page,
    nextPage,
    isError,
    prevPage,
    get,
  } = useGetRequest<{
    users: IUser[];
    pagination: IPagination;
  }>({
    load: true,
    path: "/accounts/users",
  });

  const [searchString, searchUser] = useState<string>();
  const debouncedSearchString = useDebounce(searchString, 400);

  useEffect(() => {
    if (debouncedSearchString || debouncedSearchString === "") {
      get("/accounts/users?search=" + debouncedSearchString);
    }
  }, [debouncedSearchString]);

  const users: IUser[] = data?.data.users ?? [];
  const pagination = isError ? [] : data?.data.pagination;

  return {
    users,
    pagination,
    page,
    nextPage,
    prevPage,
    isFetching,
    isLoading,
    searchUser,
  };
};
