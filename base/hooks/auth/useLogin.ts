import React from "react";
import { LoginInterface } from "../../interfaces/auth";
import { useLogins } from "../../lib/services/apis";

function useLogin() {
  // const { mutate: loginMutate, isLoading } = useLogins();

  const initialValues: LoginInterface = {
    email: "",
    password: "",
  };

  const [checkEmail, setCheckEmail] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const loginHandler = (values: LoginInterface) => {
    const payload: LoginInterface = {
      email: values.email,
      password: values.password,
    };

    // loginMutate(payload, {
    //   onSuccess: async (res: any) => {
    //     storage.set(loginKey, encrypt_key(res.auth_token));
    //     storage.set(userKey, encrypt_userobj(res.user));
    //     storage.set(userKYC, res.kyc_verified);
    //     storage.set(authDone, "Authenticated");

    //     toast.success("User logged in successfully");

    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1000);
    //   },
    //   onError: (err: any) => {
    //     if (err.length > 0) {
    //       err.forEach((err: string) => toast.error(err));
    //       return;
    //     }

    //     toast.error(`${err.message}`);
    //   },
    // });
  };

  return {
    initialValues,
    loginHandler,
    isLoading,
    inputChecker: {
      checkEmail,
      setCheckEmail,
    },
  };
}

export default useLogin;

// if (handleAxiosError(err)?.errors) {
//   const listOfErrors = Object.values(handleAxiosError(err)?.errors);
//   listOfErrors.forEach((err: any) => toast.error(err));

// console.log(err);

//   return;
// }
