import SearchInput from "../../Form/SearchInput";
import { UserTableHead } from "../../Table/UsersTable/UserTableHead";
import { UserTableRow } from "../../Table/UsersTable/UserTableRow";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useUsers } from "./useUsers";
const paginationBtn =
  "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";

export function Users() {
  const { users, prevPage, nextPage, isFetching } = useUsers();

  return (
    <div className="md:w-full py-8  h-auto w-full">
      <div className="w-[500px] ml-12">
        <SearchInput
          placeholder="Search by account name..."
          setSearch={() => {}}
          showFilter={false}
        />
      </div>

      <div className="mt-4">
        <div className="relative overflow-x-auto ">
          {isFetching ? (
            <UsersLoadingSkeleton />
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <UserTableHead />
              <tbody>
                {users?.map((user, i) => (
                  <UserTableRow
                    key={i}
                    num={i + 1}
                    customer_name={`${user.first_name} ${user.last_name}`}
                    email_address={user.email}
                    phone_number={user.phone}
                    wallet_balance={"0"}
                    kyc_status={user.kyc_verified ? "completed" : "pending"}
                    last_login={new Date().toDateString()}
                  />
                ))}
              </tbody>
            </table>
          )}
          <div className="border-t">
            <div className="bg-white space-x-2 py-4 flex place-content-center">
              <button className={paginationBtn} onClick={prevPage}>
                {" "}
                Preview{" "}
              </button>
              {/* <button className={paginationBtn}> 1 </button>
                  <button className={paginationBtn}> 2 </button> */}
              <button className={paginationBtn} onClick={nextPage}>
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
