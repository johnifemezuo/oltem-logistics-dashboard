import Head from "next/head";
import LoginHistory from "../../../../../components/Pages/LoginHistory";

export default function LoginHistoryPage() {
  return (
    <>
      <Head>
        <meta name="Transactions" content="Transactions History" />
        <title>User Login History</title>
      </Head>

      <LoginHistory />
    </>
  );
}
