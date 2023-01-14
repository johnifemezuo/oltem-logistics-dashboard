// import {ReactComponent as zigahLogo} from "zigahLogo.svg";

import Image from "next/image";

export function Logo() {
  return (
    <div className="mt-4">
      <Image src="/zigah-logo.svg" className="w-[100px] md:w-[90px] mt-4" alt="Zigah logo" width={100} height={100} />
    </div>
  );
}
