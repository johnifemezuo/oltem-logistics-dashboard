import React from "react";
import { Loader } from "../../../../assets";
import Spinner from "../../../../assets/icons/Spinner";

export function TrxnLoading({ text }: any) {
  return (
    <div className="-mt-12 content-center grid justify-center mx-auto text-center">
      <span className="mx-auto w-12">
        <Loader />
      </span>
      <p className="text-center pt-4">{text}</p>
    </div>
  );
}
