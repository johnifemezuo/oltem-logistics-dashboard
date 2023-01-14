import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";
import { CustomButton } from "../../Form";
import DropdownSelect from "../DropdownSelect";

export function BlockUserModal({ closeModal }: {closeModal: any}) {
  const people: { name: string, id: number }[] = [
    {
      name: "I expect he is hacker",
    id: 0},
    {
      name: "I dont trust the account",
    id: 1},
    { name: "I just like to disable things", id: 2 },
  ];
  const [selected, setSelected] = useState<any>("");

  return (
    <div className="w-[500px] text-center space-y-9 p-8">
      <div className="space-y-2">
        <h1 className="md:text-xl font-semibold text-primary-color">Block User</h1>

        <p className="text-gray-500">Why are you blocking this user?</p>
      </div>

      <div className="w-[350px] mx-auto ">
        <DropdownSelect options={people} selected={selected} setSelected={setSelected} />
      </div>

      <div className="space-y-4 pt-12">
        <div className="grid grid-cols-2 mx-auto w-[350px] gap-6">
          <CustomButton className="full">Proceed</CustomButton>
          <CustomButton onClick={closeModal} bg_color="full border bg-zinc-100 text-primary-color">
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
