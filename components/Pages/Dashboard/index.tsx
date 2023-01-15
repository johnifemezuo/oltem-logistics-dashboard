import { FaUsers } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { localCurrencyFormater } from "../../../base";
import { TransactionCard } from "../../Card/TransactionCard";
import { useDashboardTransactions } from "./useDashboardTransactions";

export function DashboardPage() {
  const {
    isLoading,
    totalTransactions,
    totalSuccessfulTransfers,
    totalPendingTransactions,
    totalFailedTransactions,
  } = useDashboardTransactions();
  return (
    <div className="md:w-[1200px] mx-auto py-16 h-auto w-full">
      {isLoading ? (
        <Skeleton containerClassName="flex gap-6" count={4} height={100} />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-6">
            <TransactionCard
              title="Total Amount of Transfers"
              amount={localCurrencyFormater(totalTransactions?.data[0]?.sum, "USD")}
              iconBg="bg-bg-light-pink"
            />
            <TransactionCard
              title="Successful Transfers"
              amount={localCurrencyFormater(totalSuccessfulTransfers?.data[0]?.sum, "USD")}
              iconBg="bg-bg-light-green"
            />
            <TransactionCard
              title="Pending Transfers"
              amount={localCurrencyFormater(totalPendingTransactions?.data[0]?.sum, "USD")}
              iconBg="bg-bg-light-blue"
            />
            <TransactionCard
              title="Failed Transfers"
              amount={localCurrencyFormater(totalFailedTransactions?.data[0]?.sum, "USD")}
              iconBg="bg-bg-light-re"
            />
            <TransactionCard
              title="Total Amount of Users"
              amount={localCurrencyFormater(totalFailedTransactions?.data[0]?.sum, "USD")}
              iconBg="bg-[#E9E9E9]"
              icon={<FaUsers className="text-xl" />}
            />
            <TransactionCard
              title="Active Users"
              amount={localCurrencyFormater(totalFailedTransactions?.data[0]?.sum, "USD")}
              iconBg="bg-[#E2FFE7]"
              icon={<FaUsers className="text-xl" />}
            />
          </div>
        </>
      )}
    </div>
  );
}
