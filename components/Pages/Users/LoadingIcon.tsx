import React from "react";
import Spinner from "../../../assets/icons/Spinner";

export function LoadingIcon({ text }: any) {
  return (
    <div className="-mt-12 content-center grid justify-center mx-auto text-center">
      <span className="ml-16">
        <Spinner />
      </span>
      <p className="text-center pt-4">{text}</p>
    </div>
  );
}
