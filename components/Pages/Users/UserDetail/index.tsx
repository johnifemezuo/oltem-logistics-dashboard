import { useState } from "react";
import { CustomButton } from "../../../Form";
import BackButton from "../../../Form/Buttons/BackButton";
import CustomModal from "../../../UI/Modal/CustomModal";
import { PreviewKYCstatusModal } from "../../../UI/Modal/PreviewKYCstatusModal";
import { PreviewUserInfoModal } from "../../../UI/Modal/PreviewUserInfoModal";
import UserPixandName from "../../../UI/UserProfilePix/UserPixandName";
import Transactions from "../../Transactions/Comp/Transactions";

export function UserDetail() {
  const [blockUser, setBlockUser] = useState<boolean>(false);
  const [kYC, setKYC] = useState<boolean>(false);
  return (
    <div className="md:w-[1000px] mx-auto py-16 h-auto w-full">
      <div className="space-y-8">
        <BackButton />

        <UserPixandName name="Shedrach Johnson" initials="SJ" img="" />

        <div className="grid grid-cols-4">
          <div className="space-y-1">
            <h3 className="text-zinc-400">Wallet balance</h3>
            <h1 className="font-medium text-zinc-800 text-lg">₦9,000,890.00</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400">Email Address</h3>
            <h1 className="font-medium text-zinc-800 text-lg">shedrack@gmail.com</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400">Phone Number</h3>
            <h1 className="font-medium text-zinc-800 text-lg">08090999989</h1>
          </div>

          <div className="space-y-1">
            <h3 className="text-zinc-400">Last Log In</h3>
            <h1 className="font-medium text-zinc-800 text-lg">05-08-2021 10:00AM</h1>
          </div>
        </div>
      </div>
      <div className="flex--items space-x-5 mt-6">
        <CustomButton className="w-[150px] font-bold" onClick={() => setBlockUser(true)}>
          Block User
        </CustomButton>
        <CustomButton
          onClick={() => setKYC(true)}
          bg_color="w-[150px] font-bold border bg-zinc-100 text-primary-color"
        >
          KYC Status
        </CustomButton>
      </div>
      <Transactions />

      <CustomModal closeModal={() => setBlockUser(false)} isOpen={blockUser} showCloseButton={true}>
        <PreviewUserInfoModal  />
      </CustomModal>

      <CustomModal closeModal={() => setKYC(false)} isOpen={kYC} showCloseButton={true}>
        <PreviewKYCstatusModal />
      </CustomModal>
    </div>
  );
}
