import { useState } from "react";
import {
  getInitialsFrom,
  localCurrencyFormater,
  localDateFormater,
} from "../../../../base";
import { BackButton, CustomButton } from "../../../Form";
import {
  BlockUserModal,
  BlockWalletModal,
  CustomModal,
  PreviewKYCstatusModal,
  UserPixandName,
} from "../../../UI";
import Transactions from "../../Transactions/Comp/Transactions";
import { IKyc } from "../user.interface";
import { UserDetailLoading } from "./UserDetailLoading";
import { useUserDetails } from "./useUserDetails";
import { useUserWallet } from "./useUserWallet";

export function UserDetail({ userId }: { userId: string }) {
  const [blockUser, setBlockUser] = useState<boolean>(false);
  const [blockWallet, setBlockWallet] = useState<boolean>(false);
  const [kYC, setKYC] = useState<boolean>(false);

  const { user, isLoading } = useUserDetails(userId);

  const {
    wallet,
    isLoading: isWalletLoading,
    isError,
    isFetching,
  } = useUserWallet(userId);

  return (
    <>
      {isLoading || isWalletLoading ? (
        <UserDetailLoading />
      ) : (
        <>
          <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
            <div className="space-y-8">
              <BackButton />

              <UserPixandName
                name={`${user.first_name} ${user.last_name}`}
                initials={getInitialsFrom(
                  `${user.first_name} ${user.last_name}`
                )}
                img=""
              />

              <div className="grid grid-cols-4">
                <div className="space-y-1">
                  <h3 className="text-zinc-400 text-sm">Wallet balance</h3>
                  <h1 className="font-medium text-zinc-700">
                    {localCurrencyFormater(
                      wallet?.available_balance ?? 0,
                      "NGN"
                    )}
                  </h1>
                </div>

                <div className="space-y-1">
                  <h3 className="text-zinc-400 text-sm">Email Address</h3>
                  <h1 className="font-medium text-zinc-700">{user.email}</h1>
                </div>

                <div className="space-y-1">
                  <h3 className="text-zinc-400 text-sm">Phone Number</h3>
                  <h1 className="font-medium text-zinc-700">{user.phone}</h1>
                </div>

                <div className="space-y-1">
                  <h3 className="text-zinc-400 text-sm">Last Log In</h3>
                  <h1 className="font-medium text-zinc-700">
                    {localDateFormater(
                      user.last_login?.updated_at || new Date()
                    )}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex--items space-x-5 mt-6">
              <CustomButton
                className="w-[150px] "
                onClick={() => setBlockUser(true)}
              >
                Block User
              </CustomButton>

              <CustomButton
                onClick={() => setBlockWallet(true)}
                className="min-[150px] "
              >
                {wallet.is_active ? "Block Wallet" : "Un-block Wallet"}
              </CustomButton>
              <CustomButton
                onClick={() => setKYC(true)}
                bg_color="w-[150px] border bg-zinc-100 text-primary-color"
              >
                KYC Status
              </CustomButton>
            </div>

            <Transactions userId={userId} />

            <CustomModal
              closeModal={() => setBlockUser(false)}
              isOpen={blockUser}
              showCloseButton={true}
            >
              <BlockUserModal
                userId={userId}
                closeModal={() => setBlockUser(false)}
              />
            </CustomModal>

            <CustomModal
              closeModal={() => setBlockWallet(false)}
              isOpen={blockWallet}
              showCloseButton={true}
            >
              <BlockWalletModal
                walletId={wallet?.id}
                isActive={wallet.is_active ?? false}
                userId={userId}
                closeModal={() => setBlockWallet(false)}
              />
            </CustomModal>

            <CustomModal
              closeModal={() => setKYC(false)}
              isOpen={kYC}
              showCloseButton={true}
            >
              <PreviewKYCstatusModal kycVerified={user.kyc_verified as boolean} kycs={user.kycs ?? ([] as IKyc[])} />
            </CustomModal>
          </div>
        </>
      )}
    </>
  );
}
