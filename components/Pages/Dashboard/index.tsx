import { TransactionCard } from "../../Card/TransactionCard";

export function DashboardPage() {
  return (
    <div className="md:w-[1200px] mx-auto py-16 h-auto w-full">
      <div className="grid grid-cols-4 gap-6">
        <TransactionCard title="Total Amount of Transfers" amount="1,023,530" iconBg="bg-bg-light-pink" />
        <TransactionCard title="Successful Transfers" amount="1,023,530" iconBg="bg-bg-light-green" />
        <TransactionCard title="Pending Transfers" amount="1,023,530" iconBg="bg-bg-light-blue" />
        <TransactionCard title="Failed Transfers" amount="1,023,530" iconBg="bg-bg-light-re" />
      </div>
    </div>
  )
}
