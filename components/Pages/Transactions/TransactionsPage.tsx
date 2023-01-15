import React from "react";
import Skeleton from "react-loading-skeleton";
import { localCurrencyFormater, useTotalTransactions } from "../../../base";
import { BalanceDisplay } from "../../UI";
import Transactions from "./Comp/Transactions";

export function TransactionsPage() {
  const { data: totalTransactions, isLoading } = useTotalTransactions();
  return (
    <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
      {isLoading ? (
        <div className="w-48">
          <Skeleton containerClassName="gap-6" count={1} height={100} />
        </div>
      ) : (
        <BalanceDisplay
          amount={localCurrencyFormater(totalTransactions?.data[0]?.sum, "USD")}
        />
      )}
      <Transactions />
    </div>
  );
}
