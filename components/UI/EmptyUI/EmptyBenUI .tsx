import React from "react";
import { RiBuildingFill } from "react-icons/ri";

function EmptyBenUI() {
  return (
    <div className="w-full text-center h-full  grid place-content-center md:py-12">
      <span className="bg-app-bg w-16 h-16 grid place-content-center border rounded-full mx-auto mb-6">
        <RiBuildingFill className="text-3xl text-primary-color" />
      </span>
      <h1 className="md:text-xl mb-2 font-bold text-primary-color">
        There is nothing to see yet.
      </h1>
      <p className="text-zinc-600">Saved Beneficiary will be listed here.</p>
    </div>
  );
}

export default EmptyBenUI;
