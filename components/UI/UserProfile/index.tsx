/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { useAuth } from "../../../base";
interface IUserProfile {
  userName?: string;
  userImg?: string;
  initials?: string;
  email?: string;
}

export default function UserProfile({
  userName,
  userImg,
  initials,
  email,
}: IUserProfile) {
  const { logout } = useAuth();
  if (!userName || !initials || !email) {
    return null;
  }
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group  items-center text-base font-medium relative text-zinc-800 hover:text-opacity-100 focus:outline-none `}
          >
            <div className="flex--items space-x-2">
              <span>{userName}</span>
              <div className="grid place-content-center text-lg font-semibold bg-[#cedfee] object-contain  border-2  rounded-full border-[#75818b] w-9 h-9">
                <div>
                  {userImg ? (
                    <img
                      src={userImg}
                      className="w-full  rounded-full h-full"
                      alt="user img"
                    />
                  ) : (
                    <span className="text-lg">{initials}</span>
                  )}
                </div>
              </div>
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
              className="absolute rounded-lg  left-4 z-50 mt-3  max-w-sm -translate-x-1/2 -ml-9 transform px-4 sm:px-0 lg:w-[200px]"
              static
            >
              <div
                id="dropdownAvatar"
                className=" z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow-lg border"
              >
                <div className="py-3 px-4 text-sm text-left text-gray-900">
                  <h4 className="text-zinc-600">{userName}</h4>
                  <div className="font-medium  truncate">{email}</div>
                </div>

                <div className="py-1 cursor-pointer" onClick={logout}>
                  <p className="profile-link">Log out</p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
