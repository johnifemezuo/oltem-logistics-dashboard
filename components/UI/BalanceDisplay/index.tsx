import CurrencyFormat from "react-currency-format";

function BalanceDisplay({ amount }: { amount: any }) {
  return (
    <div className="">
      <p className="text-sm text-zinc-600 mb-3 font-medium">
        Transactions Processed
      </p>
      <h1 className="relative font-semibold ">
        <span className="text-xl absolute top-0 left-0 text-primary-color">
          $
        </span>
        <CurrencyFormat
          value={amount || "0.0"}
          displayType={"text"}
          thousandSeparator={true}
          suffix=""
          className="text-[#35395e] text-4xl font-semibold ml-5"
        />
      </h1>

      <div className="my-8"></div>
    </div>
  );
}

export default BalanceDisplay;
