import Head from "next/head";
import { DashboardPage } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Head>
        <meta name="Dashboard" content="Dashboard Metrix" />
        <title>Dashboard</title>
      </Head>
      <DashboardPage />
    </>
  );
}
