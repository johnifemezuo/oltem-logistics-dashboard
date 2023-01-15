import Head from "next/head";
import { RateSettingPage } from "../../../components";

function RatesPage() {
  return (
    <>
      <Head>
        <meta name="Transactions" content="Transactions History" />
        <title>Rates</title>
      </Head>

      <RateSettingPage />
    </>
  );
}

export default RatesPage;
