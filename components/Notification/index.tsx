import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { RiNotification3Line } from "react-icons/ri";

export default function Notification() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group  items-center text-base font-medium relative text-zinc-800 hover:text-opacity-100 focus:outline-none `}
          >
            <div className="relative">
              <RiNotification3Line size={25} className="text-zinc-700" />
              <span className="w-2 h-2 grid bg-red-600 text-white rounded-full place-content-center absolute -top-1 -right-1 text-xs font-medium"></span>
            </div>
          </Popover.Button>

          {/* Use the `Transition` component. */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* Mark this component as `static` */}
            <Popover.Panel
              className="absolute rounded-lg  -left-20 z-50 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:w-[280px]"
              static
            >
              <div className="overflow-hidden border relative grid gap-8 rounded-md shadow bg-white p-7 h-32 ">
                <div className=" rounded-lg p-2 transition duration-150 ease-in-out ">
                  <p className=" text-zinc-700 text-center">No Notification</p>

                  <Link
                    href="#"
                    className="absolute bottom-0 right-0 left-0 bg-zinc-50 border-t text-zinc-700 py-1 hover:bg-neutral-100"
                  >
                    See all
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
