import { BackButton } from "../../Form";
import UsersLoadingSkeleton from "../Users/UsersLoadingSkeleton";
import { LoginHistoryTableHead } from "./LoginHistoryTableHead";
import { LoginHistoryTableRow } from "./LoginHistoryTableRows";

const paginationBtn =
  "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";

function LoginHistory() {
  return (
    <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
      <div className="space-y-8">
        <BackButton />

        <h1 className="text-2xl font-semibold text-primary-color">Log In History</h1>
        <p className="text-zinc-500 text-lg mt-4">View the Log In History of this customer.</p>

        <div>
          <div className="mt-4">
            <div className="relative overflow-x-auto ">
              {false ? (
                <UsersLoadingSkeleton />
              ) : (
                <table className="w-full text-sm text-left text-gray-500">
                  <LoginHistoryTableHead />
                  <tbody>
                    <LoginHistoryTableRow
                      date={"27-10-2023"}
                      device={`Samsung A7`}
                      location={`Lagos, Nigeria`}
                      ipAddress={`1.978.990.1`}
                    />
                    <LoginHistoryTableRow
                      date={"27-10-2023"}
                      device={`Samsung A7`}
                      location={`Lagos, Nigeria`}
                      ipAddress={`1.978.990.1`}
                    />
                    <LoginHistoryTableRow
                      date={"27-10-2023"}
                      device={`Samsung A7`}
                      location={`Lagos, Nigeria`}
                      ipAddress={`1.978.990.1`}
                    />
                  </tbody>
                </table>
              )}
              <div className="border-t">
                <div className="bg-white space-x-2 py-4 flex place-content-center">
                  <button className={paginationBtn} onClick={() => {}}>
                    {" "}
                    Prev{" "}
                  </button>
                  {/* <button className={paginationBtn}> 1 </button>
                  <button className={paginationBtn}> 2 </button> */}
                  <button className={paginationBtn} onClick={() => {}}>
                    {" "}
                    Next{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginHistory;
