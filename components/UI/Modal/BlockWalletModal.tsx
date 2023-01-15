import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { CustomButton } from "../../Form";
import DropdownSelect from "../DropdownSelect";
import { useBlockUserWallet } from "./useBlockUserWallet";

const people: { name: string; id: number }[] = [
  {
    name: "I expect he is hacker",
    id: 0,
  },
  {
    name: "I dont trust the account",
    id: 1,
  },
  { name: "I just like to disable things", id: 2 },
];

export function BlockWalletModal({
  closeModal,
  userId,
}: {
  closeModal: any;
  userId: string;
}) {
  const [selected, setSelected] = useState<any>("");

  const { handleBlockUserWallet, isLoading } = useBlockUserWallet({ userId });

  const blockUserWallet = useCallback(() => {
    if (selected) {
      return handleBlockUserWallet(selected);
    } else {
      toast.error(
        "You need to select a reason for blocking this customer's wallet"
      );
    }
  }, [selected]);

  return (
    <div className="w-[500px] text-center space-y-9 p-8">
      <div className="space-y-2">
        <h1 className="md:text-xl font-semibold text-primary-color">
          Block Wallet
        </h1>

        <p className="text-gray-500">
          Why are you blocking this users wallet??
        </p>
      </div>

      <div className="w-[350px] mx-auto ">
        <DropdownSelect
          options={people}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="space-y-4 pt-12">
        <div className="grid grid-cols-2 mx-auto w-[350px] gap-6">
          <CustomButton
            onClick={blockUserWallet}
            isLoading={isLoading}
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
