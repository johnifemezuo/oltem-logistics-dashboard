import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { startTransition, useState } from "react";
import { IPagination } from "../../../interfaces";
import { useAuth } from "../../stores";

import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const useGetRequest = <TResponse extends Record<string, any>>({
  path,
  load = false,
  qureyOptions,
}: {
  path: string;
  load?: boolean;
  qureyOptions?: UseQueryOptions<
    IRequestSucess<TResponse | undefined>,
    IRequestError,
    IRequestSucess<TResponse | undefined>,
    Array<any>
  >;
}) => {
  const [requestPath, updatePath] = useState<string>(path);
  const { authToken } = useAuth();
  const [options, setOptions] = useState<any>(qureyOptions);
  const [page, setPage] = useState<number>(1);

  const query = useQuery<any, any, IRequestSucess<TResponse>>(
    [requestPath, {}],
    () =>
      new Promise<IRequestSucess<TResponse> | IRequestError>(async (res, rej) => {
        setTimeout(async () => {
          const postResponse = await makeRequest<TResponse>({
            path: requestPath,
            bearerToken: authToken,
          });
          if (postResponse?.status) {
            res(postResponse as IRequestSucess<TResponse>);
          } else {
            rej(postResponse);
          }
        }, 200);
      }),
    {
      enabled: load,
      ...options,
    }
  );

  const nextPage = () => {
    if (query.data?.data.pagination) {
      const pagination: IPagination = query.data?.data.pagination;
      if (
        pagination.next_page !== pagination.current_page &&
        pagination.next_page > pagination.current_page
      ) {
        updatePath(constructPaginationLink(requestPath, pagination.next_page));
      }
    }
  };

  const constructPaginationLink = (link: string, pageNumber: number) => {
    const oldLink = link;
    if (link.includes("?")) {
      if (link.includes("?page=")) {
        // replace current page number with new number
        link = link.replace(/\?page=(\d+)/gim, `?page=${pageNumber}`);
      } else if (link.includes("&page=")) {
        link = link.replace(/\&page=(\d+)/gim, `&page=${pageNumber}`);
      } else {
        link = `${link}&page=${pageNumber}`;
      }
    } else {
      link = `${link}?page=${pageNumber}`;
    }

    // only update page when pagination is done
    if (oldLink !== link) {
      setPage(pageNumber);
    }
    return link;
  };

  const prevPage = () => {
    if (query.data?.data.pagination) {
      const pagination: IPagination = query.data?.data.pagination;
      if (
        pagination.previous_page !== pagination.current_page &&
        pagination.previous_page < pagination.current_page
      ) {
        updatePath(constructPaginationLink(requestPath, pagination.previous_page));
      }
    }
  };

  const gotoPage = (pageNumber: number) => {
    updatePath(constructPaginationLink(requestPath, pageNumber));
  };

  const updatedPathAsync = async (link: string) => {
    startTransition(() => {
      updatePath(link);
    });
  };

  const setOptionsAsync = async (fetchOptions: any) => {
    startTransition(() => {
      setOptions(fetchOptions);
    });
  };

  const get = async (
    link: string,
    fetchOptions?: UseQueryOptions<
      IRequestSucess<TResponse | undefined>,
      IRequestError,
      IRequestSucess<TResponse | undefined>,
      Array<any>
    >
  ): Promise<IRequestSucess<TResponse> | undefined> => {
    await setOptionsAsync(fetchOptions);
    await updatedPathAsync(link);

    return query.data;
  };

  return { ...query, updatePath, nextPage, prevPage, get, gotoPage, page };
};
