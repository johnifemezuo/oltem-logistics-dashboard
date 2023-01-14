import Head from "next/head";
import { Users } from "../../../components/Pages/Users";

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
