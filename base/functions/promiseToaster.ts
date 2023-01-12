import toast, { Renderable, ValueOrFunction } from "react-hot-toast";
import { IRequestError, IRequestSucess } from "../hooks";

export const promiseToaster = <T>(
  resolver: Promise<IRequestSucess<T>>,
  msgs?: {
    loading?: Renderable;
    success?: ValueOrFunction<Renderable, unknown>;
    error?: ValueOrFunction<Renderable, any>;
  }
) => {
  const msgsBox = msgs ?? {
    success: undefined,
    error: undefined,
    loading: undefined,
  };
  const { success, error, loading = "Loading..." } = msgsBox;

  return toast.promise(resolver, {
    loading: loading,
    success: <T extends {message: string}>(data:T ) => {
      return (success as string) ?? data.message;
    },
    error: (err: IRequestError) => {
      return (error as string) ?? err?.message;
    },
  });
};
