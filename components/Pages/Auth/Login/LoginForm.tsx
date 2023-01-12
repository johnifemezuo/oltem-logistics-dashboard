import { useEffect } from "react";
import { useLogin } from "./useLogin";

export const LoginForm = () => {
  const { login, errors, register } = useLogin();

  useEffect(() => {
    // console.log(errors);
  }, [errors]);

  return (
    <>
      <form onSubmit={login}>
        <input type="text" {...register("email")} />
        <br />
        <input type="password" {...register("password")} />
        <br />
        <input type="submit" value={"login"} />
      </form>
    </>
  );
};
