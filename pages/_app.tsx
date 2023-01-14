import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthContext, queryClient } from "../base";
import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
