import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { CustomButton } from "../../Form";
import DropdownSelect from "../DropdownSelect";
import { useUserWalletManagement } from "./useUserWalletManagement";

const people: { name: string; id: string }[] = [
  {
    name: "I expect he is hacker",
    id: "04f046c8-62f8-4315-8d31-a47fe40cdf46",
  },
  {
    name: "I dont trust the account",
    id: "06d01dcd-c9d0-470b-8b67-4880f6602365",
  },
  {
    name: "I just like to disable things",
    id: "4df89db2-e1b0-4001-8659-4f67afb9699e",
  },
];

export function BlockWalletModal({
  closeModal,
  walletId,
  isActive,
  userId,
}: {
  closeModal: any;
  walletId: string | undefined;
  isActive: boolean;
  userId: string | undefined;
}) {
  const [selected, setSelected] = useState<any>("");

  const {
    handleBlockUserWallet,
    handleUnBlockUserWallet,
    isBlocking,
    isUnblocking,
  } = useUserWalletManagement({
    walletId,
    userId,
  });

  const blockUserWallet = useCallback(() => {
    if (selected) {
      return handleBlockUserWallet(selected);
    } else {
      toast.error(
        "You need to select a reason for blocking this customer's wallet"
      );
    }
  }, [selected, userId, walletId]);

  const unblockUserWallet = useCallback(() => {
    return handleUnBlockUserWallet();
  }, [userId, walletId]);

  return (
    <div className="w-[500px] text-center space-y-9 p-8">
      <div className="space-y-2">
        <h1 className="md:text-xl font-semibold text-primary-color">
          {isActive ? "Block" : "Unblock"} Wallet
        </h1>

        {isActive ? (
          <p className="text-gray-500">
            Why are you blocking this users wallet??
          </p>
        ) : null}
      </div>
      {isActive ? (
        <div className="w-[350px] mx-auto ">
          <DropdownSelect
            options={people}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      ) : null}

      <div className="space-y-4 pt-12">
        <div className="grid grid-cols-2 mx-auto w-[350px] gap-6">
          <CustomButton
            onClick={isActive ? blockUserWallet : unblockUserWallet}
            isLoading={isActive ? isBlocking : isUnblocking}
            className="full"
          >
            Proceed
          </CustomButton>

          <CustomButton
            onClick={closeModal}
            bg_color="full border bg-zinc-100 text-primary-color"
          >
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
