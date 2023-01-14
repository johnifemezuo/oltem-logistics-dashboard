import { FC, ReactNode } from "react";
import { getinitials, useTransaction } from "../../base";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import Notification from "../Notification";
import { TransactionPreviewModal } from "../UI";
import { TransactionModal } from "../UI/Modal/TransactionModal";
import UserProfile from "../UI/UserProfile";

interface IDashboardLayout {
  children: ReactNode;
}

export const DashboardLayout: FC<IDashboardLayout> = ({ children }) => {
  const user = {
    profile_pics: "",
    first_name: "Johnny",
    last_name: "Drill",
    email: "johnny@gmail.com",
  };
  const data = true;

  const { transaction, openTxnModal } = useTransaction();

  return (
    <div>
      <div className="w-full relative h-screen bg-app-bg flex">
        <div className="w-[16%] bg-app-bg fixed bottom-0 left-0 h-screen">
          <NavigationBar />
        </div>

        <div className="w-fu">
          <div className="bg-app-bg fixed top-0 right-0 z-10 w-[84%] py-6 px-12">
            <div className="text-center ">
              <h2 className="text-lg font-semibold text-primary-color -ml-[20%]">
                {"Dashboard"}
              </h2>

              <div className="absolute flex--items space-x-8 text-base right-8 top-5 ">
                <Notification />

                <div>
                  <UserProfile
                    userImg={user?.profile_pics}
                    initials={getinitials(user?.first_name, user?.last_name)}
                    userName={data && user?.first_name + " " + user?.last_name}
                    email={data && user?.email}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-full rounded-tl-2xl drop-shadow-none fixed bottom-0 right-0 top-[8.5%] w-[84%]  overflow-y-auto bg-white">
            {children}
          </div>
        </div>
      </div>
      <TransactionModal open={openTxnModal}>
        <TransactionPreviewModal transaction={transaction} />
      </TransactionModal>
    </div>
  );
};
