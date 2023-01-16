import { CustomButton, CustomInput } from "../../Form";
import {RateList} from "./RateList";
import { RateSettingLoading } from "./RateSettingLoading";

export function RateSettingPage() {
  return (
    <div className="md:w-[800px] capitalize space-y-8 mx-auto py-16 h-auto w-full">
      <div className="w-[500px]">
        <h2 className="text-xl font-semibold text-primaryText-color">Input Your rates</h2>

        <div className="space-y-5 mt-4">
          <CustomInput label="Rate amount" placeholder="Rate Amount" type="text" />
          <CustomInput label="Provider" placeholder="Provider" type="text" />
          <CustomButton className="w-[100px]">Save</CustomButton>
        </div>
      </div>

      {true ? (
        <RateSettingLoading />
      ) : (
        <div className="pt-12 borer-t">
          <h2 className="text-xl font-semibold text-primaryText-color">Rate History</h2>
          <div className="bg-zinc-100 rounded-sm w-full flex--items justify-between px-4 text-xs mt-3 py-2 text-zinc-500">
            <p>Provider</p>
            <p>Amount</p>
          </div>

          <div className="divide-y mb-12 h-[400px] overflow-y-auto ">
            <RateList name="Binace" amount="70,000.00" time="05:30pm" date="12-02-2023" />
            <RateList name="Fincra" amount="70,000.00" time="05:30pm" date="12-02-2023" />
          </div>
        </div>
      )}
    </div>
  );
}
