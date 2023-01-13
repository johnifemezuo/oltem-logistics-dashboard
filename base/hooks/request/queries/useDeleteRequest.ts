import {
  MutateOptions,
  QueryObserverResult,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";

import { useAuth } from "../../stores";
import { HttpMethod } from "../api-request.enum";
import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const useDeleteRequest = <TResponse>() => {
  const [requestPath, updateDeletePath] = useState<string>("");
  const [options, setOptions] = useState<any>();
  const { authToken } = useAuth();
  const query = useQuery<any, any, IRequestSucess<TResponse>>(
    [requestPath, {}],
    () =>
      new Promise<IRequestSucess<TResponse> | IRequestError>(
        async (res, rej) => {
          setTimeout(async () => {
            const postResponse = await makeRequest<TResponse>({
              path: requestPath,
              bearerToken: authToken,
              method: HttpMethod.DELETE,
            });
            if (postResponse?.status) {
              res(postResponse as IRequestSucess<TResponse>);
            } else {
              rej(postResponse);
            }
          }, 200);
        }
      ),
    { ...options }
  );

  const updatedPathAsync = async (link: string) => {
    return updateDeletePath(link);
  };

  const setOptionsAsync = async (fetchOptions: any) => {
    return setOptions(fetchOptions);
  };
  const deleteR = async (
    link: string,
    fetchOptions?:
      | MutateOptions<IRequestSucess<TResponse>, IRequestError, void, unknown>
      | undefined
  ): Promise<QueryObserverResult<IRequestSucess<TResponse>, any>> => {
    await updatedPathAsync(link);
    await setOptionsAsync(fetchOptions);

    return query.refetch<TResponse>({
      queryKey: [link, {}],
    });
  };
  return { updateDeletePath, deleteR, ...query };
};
