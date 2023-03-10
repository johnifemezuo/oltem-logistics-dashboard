import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  useAuth,
  usePostRequest,
  useYupValidationResolver,
  ValidationSchema,
} from "../../../../base";
import { ILogin, ILoginData } from "./login.interface";
import { loginValidator } from "./login.validator";

export const createCategoryValidatorSchema: ValidationSchema = yup.object({
  name: yup.string().required("Category name is required"),
});

export const useLogin = () => {
  const resolver = useYupValidationResolver(loginValidator);
  
  const [serverError, setServerError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    ...formOptions
  } = useForm<ILogin>({
    resolver,
  });

  const isTouched = (name: keyof typeof dirtyFields) => {
    return dirtyFields[name] as boolean;
  };

  const { setToken, loginUser } = useAuth();
  const { post, data, error, ...postQuery } = usePostRequest<ILoginData>({
    path: "/accounts/auth/login",
  });

  useEffect(() => {
    if (data && data?.data && data.data.auth_token) {
      loginUser(data.data);
      setToken(data.data.auth_token);
    } else if (data && data.data && !data.data.auth_token) {
      alert("Error occurred logging in");
    }
  }, [data]);

  const handleLogin = (data: ILogin) => {
    post(data, {
      onError: (errorData) => {
        setServerError(
          errorData?.message ?? "Error occured during login, please try again "
        );
      },
    });
  };
  const login = handleSubmit(handleLogin as SubmitHandler<FieldValues>);

  return {
    errors,
    serverError,
    login,
    register,
    isTouched,
    ...formOptions,
    ...postQuery,
  };
};
