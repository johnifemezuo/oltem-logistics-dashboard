
import { useRouter } from "next/router";
import React from "react";
import { RiAddFill, RiSendPlaneFill } from "react-icons/ri";
import { CustomButton } from "../../Form";
import useBankDetails from "../../Pages/Transactions/Comp/useBankDetails";
import BalanceDisplay from "../BalanceDisplay";


function DashboardAmountDisplay() {
  const {push:navigate} = useRouter();
  const [openBankDetails, setOpenBankDetails] = React.useState(false);
  const [openVerifyAcc, setOpenVerifyAcc] = React.useState(false);
  const { walletInfo, copied, copyToClipboard } = useBankDetails();

  const fundWalletHandler = () => {
    walletInfo ? setOpenBankDetails(true) : setOpenVerifyAcc(true);
  };

  return (
    <>
      <div>

        <div className="mt-4 flex--items space-x-6">
          <CustomButton
            onClick={fundWalletHandler}
            icon={<RiAddFill className="text-2xl ml-2 -mr-1" />}
            disabled={false}
          >
            Fund Account
          </CustomButton>

        </div>
      </div>

    
    </>
  );
}

export default DashboardAmountDisplay;
