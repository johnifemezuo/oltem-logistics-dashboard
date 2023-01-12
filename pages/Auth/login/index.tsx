import { Formik, FormikProps } from "formik";
import Link from "next/link";
import useLogin from "../../../base/hooks/auth/useLogin";
import { LoginInterface } from "../../../base/interfaces/auth";
import { loginSchema } from "../../../base/schemas/loginSchema";
import CustomButton from "../../../components/Form/Buttons/CustomButton";
import CustomInput from "../../../components/Form/Input";
import PasswordInput from "../../../components/Form/PasswordInput";
import RememberMe from "../../../components/UI/Elements/RememberMe";
import SignUpTitle from "../../../components/UI/Elements/SignUpTitle";
import { AuthWrapper, FormWrapper } from "../../../styles/styles";

function LoginPage() {
  const { initialValues, loginHandler, isLoading, inputChecker } = useLogin();
  
  return (
    <div className="w-[550px]  h-auto">
      <SignUpTitle title="Log in" desc="Welcome back, Sign in" />

      <div className=" text-center space-y-4">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          validate={(values) => {
            /@/.test(values.email)
              ? inputChecker.setCheckEmail(true)
              : inputChecker.setCheckEmail(false);
          }}
          onSubmit={async (values) => {
            await loginHandler(values);
          }}
        >
          {({ handleSubmit }: FormikProps<LoginInterface>) => (
            <form autoComplete="off" className="space-y-6" onSubmit={handleSubmit}>
              <CustomInput
                lable="Your Email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
                tick={inputChecker.checkEmail}
              />

              <PasswordInput lable="Your Password" name="password" placeholder="**123Password" />

              <RememberMe />

              <CustomButton
                customStyles="w-full"
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Log in
              </CustomButton>
            </form>
          )}
        </Formik>
        <p className="text-md ">
          <span className="text-zinc-500 ">Don`t have an account? </span>
          <Link href={""} className=" text-primary-color">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
