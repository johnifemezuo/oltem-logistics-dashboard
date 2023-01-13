import Link from "next/link";
import React from "react";

export function RememberMe() {
  return (
    <div className="flex--items text-zinc-500 w-full justify-between">
      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-primary-color bg-gray-100 outline-none rounded border-gray-300 focus:ring-primary-color dark:focus:ring-primary-color  focus:ring-2 "
        />
        <label htmlFor="link-checkbox" className="ml-2 text-sm">
          Remember me
        </label>
      </div>
      <p className="transition font-normal text-sm text-primary-color">
        <Link href={"/"}>Forget Password</Link>
      </p>
    </div>
  );
}

