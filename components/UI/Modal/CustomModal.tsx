import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { RiCloseFill } from "react-icons/ri";

interface IModal {
  isOpen: boolean;
  closeModal?: any;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export function CustomModal({
  isOpen,
  closeModal,
  children,
  showCloseButton,
}: IModal) {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => closeModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#020d5478]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {children}

                  {showCloseButton ? (
                    <span
                      onClick={() => closeModal(false)}
                      className="absolute cursor-pointer top-3 right-3 bg-[#e1e4f4] grid place-content-center w-9 rounded-full h-9"
                    >
                      <RiCloseFill className="text-xl text-primary-color" />
                    </span>
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

