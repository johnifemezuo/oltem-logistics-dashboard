import Head from "next/head";
import { TransactionsPage } from "../../../components";

export default function TransactionPage() {
  return (
    <>
      <Head>
        <meta name="Transactions" content="Transactions History" />
        <title>Transactions</title>
      </Head>

      <div>
        <TransactionsPage />
      </div>
    </>
  );
}
