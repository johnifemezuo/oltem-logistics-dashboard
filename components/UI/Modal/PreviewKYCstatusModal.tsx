import { RiCheckLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export function PreviewKYCstatusModal({ walletInfo }: any) {
  return (
    <div className="w-[600px] text-center space-y-9 p-6">
      <div className="space-y-4">
        <h1 className="md:text-xl font-semibold text-primary-color">KYC Status</h1>

        <p className="text-gray-500">View the KYC Status of this customer.</p>

        <button className="text-danger-color rounded-md py-2 px-6  bg-danger-color/10 text-xs">
          Not Done
        </button>
      </div>
      <div className="space-y-8 px-6 pt-12">
        <div className="flex--items justify-between">
          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">Identity Verification</span>{" "}
            <span className="bg-success-color p-0.5 text-sm text-white rounded-full font-medium">
              <RiCheckLine />
            </span>
          </h3>

          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">Address Verification</span>{" "}
            <span className="bg-success-color text-sm p-0.5 text-white rounded-full font-medium">
              <RiCheckLine />
            </span>
          </h3>
        </div>

        <div className="flex--items justify-between">
          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">Set PIN</span>{" "}
            <span className="bg-success-color text-sm p-0.5 text-white rounded-full font-medium">
              <RiCheckLine />
            </span>
          </h3>

          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">Business Information</span>{" "}
            <span className="bg-danger-color text-sm p-0.5 text-white rounded-full font-medium">
              <RxCross2 />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
