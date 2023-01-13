import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { AuthContext, queryClient } from "../base";
import { DashboardLayout } from "../components";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <AuthContext>
          <Component {...pageProps} />
        </AuthContext>
      </DashboardLayout>
    </QueryClientProvider>
  );
}
