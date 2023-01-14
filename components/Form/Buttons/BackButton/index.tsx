import { useRouter } from "next/router";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

function BackButton() {
  const {push} = useRouter();

  return (
    <button
      onClick={() => push("/dashboard")}
      className="text-zinc-600 bg-app-bg rounded-lg py-2 pr-4 pl-2 hover:text-primary-color transition flex--items space-x-2 "
    >
      <RiArrowLeftSLine className="md:text-xl" />{" "}
      <span className="text-sm">Back</span>
    </button>
  );
}

export default BackButton;