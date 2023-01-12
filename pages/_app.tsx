import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { queryClient } from "../base";
import AuthenticatedLayout from "../components/Layout/AuthenticatedLayout";
import UnAuthenticatedLayout from "../components/Layout/UnthenticatedLayout";
import "../styles/globals.css";

type GetLayoutType = (page: ReactElement) => ReactElement;

let getLayout: GetLayoutType = (page) => page;

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  const auth = false;

  if (route === "/_error") {
    return <Component {...pageProps} />;
  }

  if (route.startsWith("/dashboard")) {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthenticatedLayout>
          <Component {...pageProps} />
        </AuthenticatedLayout>
      </QueryClientProvider>
    );
  }

  return (
    <UnAuthenticatedLayout>
      <Component {...pageProps} />
    </UnAuthenticatedLayout>
  );
}
