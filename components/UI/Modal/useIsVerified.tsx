import { useCallback } from "react";
import { RiCheckLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export const useIsVerified = () => {
  const isVerified = useCallback((verified: boolean) => {
    return verified ? (
      <span className="bg-success-color p-0.5 text-sm text-white rounded-full font-medium">
        <RiCheckLine />
      </span>
    ) : (
      <span className="bg-danger-color text-sm p-0.5 text-white rounded-full font-medium">
        <RxCross2 />
      </span>
    );
  }, []);

  return { isVerified };
};
