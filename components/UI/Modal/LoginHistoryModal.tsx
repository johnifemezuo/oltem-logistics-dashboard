import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";
import { useTransaction } from "../../../base";
import { useLoginHistoryStore } from "../../../base/hooks/stores/auth/useLoginHistory";
interface ILoginHistoryModal {
  children: ReactNode;
  open: boolean;
}
export function LoginHistoryModal({ children, open }: ILoginHistoryModal) {
    const { openLHistory, setOpenLHistory } = useLoginHistoryStore();


  const closeModal = () => {
    setOpenLHistory(false);
  };
  return (
    <div className={`${open ? "block" : "hidden"} inset-0 w-full fixed z-50`}>
      <div
        onClick={closeModal}
        className={`w-full transition absolute bg-[#020d5478] inset-0 z-10`}
      ></div>
      <div
        className={`w-2/5 h-screen relative z-50 float-right bg-white  overflow-y-scroll ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          onClick={closeModal}
          className="rounded-full cursor-pointer w-8 h-8 grid absolute right-4 top-4 place-content-center bg-app-bg "
        >
          <RxCross2 className="text-xl text-primary-color" />
        </div>
        <div className="mt-20 px-16">{openLHistory ? children : null}</div>
      </div>
    </div>
  );
}
