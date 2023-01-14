import { useState } from "react";
import { BackButton, CustomButton } from "../../../Form";
import { BlockUserModal, BlockWalletModal, CustomModal, PreviewKYCstatusModal, UserPixandName } from "../../../UI";
import Transactions from "../../Transactions/Comp/Transactions";

export function UserDetail() {
  const [blockUser, setBlockUser] = useState<boolean>(false);
  const [blockWallet, setBlockWallet] = useState<boolean>(false);
  const [kYC, setKYC] = useState<boolean>(false);
  return (
    <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
      <div className="space-y-8">
        <BackButton />

        <UserPixandName name="Shedrach Johnson" initials="SJ" img="" />

        <div className="grid grid-cols-4">
          <div className="space-y-1">
            <h3 className="text-zinc-400 text-sm">Wallet balance</h3>
            <h1 className="font-medium text-zinc-700">₦9,000,890.00</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400 text-sm">Email Address</h3>
            <h1 className="font-medium text-zinc-700">shedrack@gmail.com</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400 text-sm">Phone Number</h3>
            <h1 className="font-medium text-zinc-700">08090999989</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400 text-sm">Last Log In</h3>
            <h1 className="font-medium text-zinc-700">05-08-2021 10:00AM</h1>
          </div>
        </div>
      </div>
      <div className="flex--items space-x-5 mt-6">
        <CustomButton className="w-[150px] " onClick={() => setBlockUser(true)}>
          Block User
        </CustomButton>
        
        <CustomButton onClick={() => setBlockWallet(true)} className="w-[150px] ">Block Wallet</CustomButton>
        <CustomButton
          onClick={() => setKYC(true)}
          bg_color="w-[150px] border bg-zinc-100 text-primary-color"
        >
          KYC Status
        </CustomButton>
      </div>

      <Transactions />

      <CustomModal closeModal={() => setBlockUser(false)} isOpen={blockUser} showCloseButton={true}>
        <BlockUserModal closeModal={() => setBlockUser(false)} />
      </CustomModal>

      <CustomModal
        closeModal={() => setBlockWallet(false)}
        isOpen={blockWallet}
        showCloseButton={true}
      >
        <BlockWalletModal closeModal={() => setBlockWallet(false)} />
      </CustomModal>

      <CustomModal closeModal={() => setKYC(false)} isOpen={kYC} showCloseButton={true}>
        <PreviewKYCstatusModal />
      </CustomModal>
    </div>
  );
}
