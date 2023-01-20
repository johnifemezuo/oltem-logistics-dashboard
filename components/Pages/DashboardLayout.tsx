import { FC, ReactNode, useEffect, useState } from "react";
import {
  getInitialsFrom,
  IUser,
  useAuth,
  useAuthProvider,
  useTransaction,
} from "../../base";
import { useLoginHistoryStore } from "../../base/hooks/stores/auth/useLoginHistory";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import Notification from "../Notification";
import { TransactionModal, TransactionPreviewModal } from "../UI";
import { LoginHistoryModal } from "../UI/Modal/LoginHistoryModal";
import { LoginHistoryPreviewModal } from "../UI/Modal/LoginHistoryPreviewModal";
import UserProfile from "../UI/UserProfile";

interface IDashboardLayout {
  children: ReactNode;
}

export const DashboardLayout: FC<IDashboardLayout> = ({ children }) => {
  const { user: session } = useAuthProvider();
  const { session: session2 } = useAuth();
  const { transaction, openTxnModal } = useTransaction();
  const { openLHistory } = useLoginHistoryStore();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (session2?.user) {
      setUser(session2.user);
    }
  }, [session]);

  return (
    <div>
      <div className="w-full relative h-screen bg-white flex">
        <div className="w-[16%] bg-white fixed bottom-0 left-0 h-screen border-r">
          <NavigationBar />
        </div>

        <div className="w-fu">
          <div className="border-b bg-white fixed top-0 right-0 z-10 w-[84%] py-6 px-12">
            <div className="text-center ">
              <h2 className="text-lg font-semibold text-primary-color -ml-[20%]">{"Dashboard"}</h2>

              <div className="absolute flex--items space-x-8 text-base right-8 top-5 ">
                <Notification />

                <div>
                  <UserProfile
                    userImg={user?.profile_pics as string}
                    initials={getInitialsFrom(`${user?.first_name} ${user?.last_name}`)}
                    userName={user?.first_name + " " + user?.last_name}
                    email={user?.email}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-full rounded-tl-2xl drop-shadow-none fixed bottom-0 right-0 top-[8.5%] w-[84%]  overflow-y-auto bg-gray-100/50">
            {children}
          </div>
        </div>
      </div>
      <TransactionModal open={openTxnModal}>
        <TransactionPreviewModal transactionId={transaction.id} />
      </TransactionModal>

      <LoginHistoryModal open={openLHistory}>
        <LoginHistoryPreviewModal />
      </LoginHistoryModal>
    </div>
  );
};
