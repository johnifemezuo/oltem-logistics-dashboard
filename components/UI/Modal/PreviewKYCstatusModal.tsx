import { IKyc } from "../../Pages/Users/user.interface";
import { useIsVerified } from "./useIsVerified";

export function PreviewKYCstatusModal({
  kycs,
  kycVerified,
}: {
  kycVerified: boolean;
  kycs: IKyc[];
}) {
  const { isVerified } = useIsVerified();

  const checkIfBvnIsVerified = () => {
    return kycs.some((kyc) => kyc.bvn_verified === true);
  };

  const checkIfBusinessIsVerified = () => {
    return kycs.some((kyc) => kyc.business_verified === true);
  };

  return (
    <div className="w-[600px] text-center space-y-9 p-6">
      <div className="space-y-4">
        <h1 className="md:text-xl font-semibold text-primary-color">
          KYC Status
        </h1>

        <p className="text-gray-500">View the KYC Status of this customer.</p>

        {kycVerified ? (
          <button className="bg-green-600 rounded-md py-2 px-6  text-white text-xs">
            Done
          </button>
        ) : (
          <button className="text-danger-color rounded-md py-2 px-6  bg-danger-color/10 text-xs">
            Not Done
          </button>
        )}
      </div>
      <div className="space-y-8 px-6 pt-12">
        <div className="flex--items justify-between">
          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">
              Identity Verification (BVN)
            </span>{" "}
            {isVerified(checkIfBvnIsVerified())}
          </h3>

          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">AML Verification</span>{" "}
            {isVerified(checkIfBvnIsVerified())}
          </h3>
        </div>

        <div className="flex--items justify-between">
          {/* <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">Set PIN</span>{" "}
            <span className="bg-success-color text-sm p-0.5 text-white rounded-full font-medium">
              <RiCheckLine />
            </span>
          </h3> */}

          <h3 className="flex--items space-x-2 ">
            <span className="text-zinc-700 font-medium">
              Business Information
            </span>{" "}
            {isVerified(checkIfBusinessIsVerified())}
          </h3>
        </div>
      </div>
    </div>
  );
}
