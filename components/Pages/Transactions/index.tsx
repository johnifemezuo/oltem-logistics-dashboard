import BalanceDisplay from "../../UI/BalanceDisplay";
import Transactions from "./Comp/Transactions";

export function TransactionsPage() {
  return (
    <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
      <BalanceDisplay amount={"6,000,000"} />

      <Transactions />
    </div>
  );
}
