import { MutateOptions, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../../stores";
import { HttpMethod } from "../api-request.enum";
import { IRequestError, IRequestSucess } from "../api-request.interface";
import { makeRequest } from "../make-request";

export const usePostRequest = <TResponse>({
  path,
  formData = false,
}: {
  path: string;
  formData?: boolean;
}) => {
  const { authToken } = useAuth();
  const [resetForm, setResetForm] = useState<boolean>(false);

  // register post mutation
  const mutation = useMutation<IRequestSucess<TResponse>, IRequestError>(
    (postData: any) =>
      new Promise<IRequestSucess<TResponse>>(async (res, rej) => {
        setResetForm(false);
        const postResponse = await makeRequest<TResponse>({
          path: path,
          body: postData,
          method: HttpMethod.POST,
          bearerToken: authToken,
          formData,
        });

        if (postResponse?.status) {
          setResetForm(true);
          // scroll to top after success
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          res(postResponse as IRequestSucess<TResponse>);
        } else {
          // scroll to top after error
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          rej(postResponse);
        }
      })
  );
  const post = async (
    postData: any,
    options?:
      | MutateOptions<IRequestSucess<TResponse>, IRequestError, void, unknown>
      | undefined
  ): Promise<IRequestSucess<TResponse>> => {
    return mutation.mutateAsync(postData, options);
  };

  return { post, ...mutation, resetForm };
};
