import Head from "next/head";
import { useRouter } from "next/router";
import { UserDetail } from "../../../../components/Pages/Users/UserDetail";

export default function UserDetailPage() {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <meta name="Users" content="Transactions History" />
        <title>Users</title>
      </Head>

      {query.userId ? <UserDetail userId={query.userId as string} /> : null}
    </>
  );
}
