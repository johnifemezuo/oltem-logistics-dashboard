import React from "react";
import SearchInput from "../../Form/SearchInput";
import { UserTableHead } from "../../Table/UsersTable/UserTableHead";
import { UserTableRow } from "../../Table/UsersTable/UserTableRow";

export function Users() {
  const [search, setSearch] = React.useState<string>("");

  const userData = [
    {
      customer_name: "Shedrack Johnson",
      email_address: "shedrack@gmail.com",
      wallet_balance: "₦9,000,890.00",
      phone_number: "08080899989",
      kyc_status: "completed",
      last_login: "05-08-2021 10:00AM",
    },
    {
      customer_name: "Jessica margran",
      email_address: "shedrack@gmail.com",
      wallet_balance: "₦9,000,890.00",
      phone_number: "08080899989",
      kyc_status: "failed",
      last_login: "05-08-2021 10:00AM",
    },
    {
      customer_name: "Stanly Dico",
      email_address: "shedrack@gmail.com",
      wallet_balance: "₦9,000,890.00",
      phone_number: "08080899989",
      kyc_status: "pending",
      last_login: "05-08-2021 10:00AM",
    },
    {
      customer_name: "Dimson Amanni",
      email_address: "shedrack@gmail.com",
      wallet_balance: "₦9,000,890.00",
      phone_number: "08080899989",
      kyc_status: "pending",
      last_login: "05-08-2021 10:00AM",
    },
  ];

  return (
    <div className="md:w-full py-8  h-auto w-full">
      <div className="w-[500px] ml-12">
        <SearchInput
          placeholder="Search by account name..."
          setSearch={setSearch}
          showFilter={false}
        />
      </div>

      <div className="mt-4">
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left text-gray-500">
            <UserTableHead />
            <tbody>
              {userData?.map((user, i) => (
                <UserTableRow
                      key={i}
                      num={i + 1}
                  customer_name={user.customer_name}
                  email_address={user.email_address}
                  phone_number={user.phone_number}
                  wallet_balance={user.wallet_balance}
                  kyc_status={user.kyc_status}
                  last_login={user.last_login}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
