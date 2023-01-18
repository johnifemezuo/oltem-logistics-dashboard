import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { CustomButton } from "../../Form";
import DropdownSelect from "../DropdownSelect";
import { useBlockUser } from "./useBlockUser";
import { useUnblockUser } from "./useUnblockUser";

const people: { name: string; id: string }[] = [
  {
    name: "I expect he is hacker",
    id: "1d7b3d72-76e3-47dd-901c-7d152be68774",
  },
  {
    name: "I don't trust the account",
    id: "72ee4612-d27d-465c-95f7-3fad8a81390b",
  },
  {
    name: "I just like to disable things",
    id: "c1db0641-a9c0-44e4-8e3b-d722dcb8059c",
  },
];

export function BlockUserModal({
  closeModal,
  userId,
  isUserActive,
}: {
  closeModal: any;
  userId: string;
  isUserActive: boolean;
}) {
  const [selected, setSelected] = useState<any>("");
  const { handleBlockUser, isLoading } = useBlockUser({ userId });
  const { handleUnblockUser, isLoading: isUnblockingUser } = useUnblockUser({
    userId,
  });

  const blockUser = useCallback(() => {
    if (selected) {
      return handleBlockUser(selected);
    } else {
      toast.error("You need to select a reason for blocking this customer");
    }
  }, [selected]);

  return (
    <div className="w-[500px] text-center space-y-9 p-8">
      <div className="space-y-2">
        <h1 className="md:text-xl font-semibold text-primary-color">
          {isUserActive ? "Block" : "Unblock"} User
        </h1>
      </div>

      {isUserActive ? (
        <>
          <p className="text-gray-500">Why are you blocking this user?</p>
          <div className="w-[350px] mx-auto ">
            <DropdownSelect
              options={people}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </>
      ) : null}
      <div className="space-y-4 pt-12">
        <div className="grid grid-cols-2 mx-auto w-[350px] gap-6">
          <CustomButton
            isLoading={isLoading || isUnblockingUser}
            onClick={isUserActive ? blockUser : handleUnblockUser}
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
