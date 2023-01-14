import Head from "next/head";
import { Users } from "../../../components";

export default function UsersPage() {
  return (
    <>
      <Head>
        <meta name="Transactions" content="Transactions History" />
        <title>Users</title>
      </Head>

      <div>
        <Users />
      </div>
    </>
  );
}
