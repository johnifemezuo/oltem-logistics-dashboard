import { useLoginHistoryStore } from "../../../base/hooks/stores/auth/useLoginHistory";


export function LoginHistoryPreviewModal() {
  const { loginHistory } = useLoginHistoryStore();

  return (
    <div className=" space-y-6">
      <div className="border-b pb-3 flex--items justify-between">
        <div className="space-y-2 text-left">
          <p className="text-zinc-500 ">Date</p>
          <h3 className="text-primary-color text-lg">{loginHistory?.date}</h3>
        </div>

        <div className="space-y-2 text-right">
          <p className="text-zinc-500 ">Device</p>
          <h3 className="text-primary-color text-lg">{loginHistory?.device}</h3>
        </div>
      </div>

      <div className="border-b pb-3 flex--items justify-between">
        <div className="space-y-2 text-left">
          <p className="text-zinc-500 ">IP Address</p>
          <h3 className="text-primary-color text-lg">{loginHistory?.ipAddress}</h3>
        </div>

        <div className="space-y-2 text-right">
          <p className="text-zinc-500 ">Location</p>
          <h3 className="text-primary-color text-lg">{loginHistory?.location}</h3>
        </div>
      </div>

      <div className="border-b pb-3 flex--items justify-between">
        <div className="space-y-2 text-left">
          <p className="text-zinc-500 ">Date</p>
          <h3 className="text-primary-color text-lg">27-12-2022</h3>
        </div>

        <div className="space-y-2 text-right">
          <p className="text-zinc-500 ">Date</p>
          <h3 className="text-primary-color text-lg">27-12-2022</h3>
        </div>
      </div>
    </div>
  );
}
