import Head from "next/head";
import { UserDetail } from "../../../../components/Pages/Users/UserDetail";

export default function UserDetailPage() {
  return (
    <>
      <Head>
        <meta name="Users" content="Transactions History" />
        <title>Users</title>
      </Head>

      <UserDetail />
    </>
  );
}
