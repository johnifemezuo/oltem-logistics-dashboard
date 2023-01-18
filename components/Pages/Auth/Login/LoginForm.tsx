import Link from "next/link";
import { CustomButton, CustomInput, PasswordInput } from "../../../Form";
import { RememberMe, SignUpTitle } from "../../../UI";

import { useLogin } from "./useLogin";

export function LoginForm() {
  const { serverError, login, errors, isLoading, isTouched, register } =
    useLogin();

  return (
    <div className="w-[500px]  h-auto">
      <SignUpTitle title="Log in" desc="Welcome back, Sign in" />

      <div className=" text-center space-y-4">
        <form autoComplete="off" className="space-y-6" onSubmit={login}>
          {serverError ? (
            <p className="text-red-600 font-bold my-2">{serverError} </p>
          ) : null}
          <CustomInput
            label="Your Email"
            register={register("email")}
            placeholder="example@gmail.com"
            type="email"
            tick={!errors.email?.message ? true : false}
            error={errors.email?.message}
            touched={isTouched("email")}
          />

          <PasswordInput
            label="Your Password"
            placeholder="**123Password"
            error={errors.password?.message}
            touched={isTouched("password")}
            register={register("password")}
          />

          <RememberMe />

          <CustomButton
            className="w-full"
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Log in
          </CustomButton>
        </form>

        <p className="text-sm ">
          <span className="text-zinc-500 ">Don`t have an account? </span>
          <Link href={""} className=" text-primary-color">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
