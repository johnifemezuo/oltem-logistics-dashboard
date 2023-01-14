export function PreviewUserInfoModal({ walletInfo }: any) {
  return (
    <div className="w-[600px] text-center space-y-9 p-8">
      <div className="space-y-2">
        <h1 className="md:text-xl font-semibold text-primary-color">Block User</h1>

        <p className="text-gray-500">Why are you blocking this user?</p>
      </div>
      <div className="space-y-4 pt-12">
        <h3 className="flex--items justify-between">
          <span className="text-zinc-500">Bank :</span>{" "}
          <span className="text-primary-color font-medium">{"Guaranty Trust Bank"}</span>
        </h3>

        <h3 className="flex--items justify-between">
          <span className="text-zinc-500">Account Name :</span>{" "}
          <span className="text-primary-color font-medium">{"KOLAWOLE POPOOLA"}</span>
        </h3>

        <h3 className="flex--items justify-between">
          <span className="text-zinc-500">Account Number :</span>{" "}
          <span className="text-primary-color font-medium">{"0448775844"}</span>
        </h3>
      </div>
    </div>
  );
}
