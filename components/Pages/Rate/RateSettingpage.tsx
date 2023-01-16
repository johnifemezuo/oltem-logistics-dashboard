import {
  localCurrencyFormater,
  localDateFormater,
  localTimeFormater,
} from "../../../base";
import { CustomButton, CustomInput } from "../../Form";
import { EmptyUI } from "../../UI";
import { RateList } from "./RateList";
import { RateSettingLoading } from "./RateSettingLoading";
import { useRateHistories } from "./useRateHistories";
const paginationBtn =
  "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";

export function RateSettingPage() {
  const { isLoading, prevPage, nextPage, providersRateHistories } =
    useRateHistories();
  return (
    <div className="md:w-[800px] capitalize space-y-8 mx-auto py-16 h-auto w-full mb-16">
      <div className="w-[500px]">
        <h2 className="text-xl font-semibold text-primaryText-color">
          Input Your rates
        </h2>

        <div className="space-y-5 mt-4">
          <CustomInput
            label="Rate amount"
            placeholder="Rate Amount"
            type="text"
          />
          <CustomInput label="Provider" placeholder="Provider" type="text" />
          <CustomButton className="w-[100px]">Save</CustomButton>
        </div>
      </div>

      {isLoading ? (
        <RateSettingLoading />
      ) : (
        <div className="pt-12 borer-t">
          <h2 className="text-xl font-semibold text-primaryText-color">
            Rate History
          </h2>
          <div className="bg-zinc-100 rounded-sm w-full flex--items justify-between px-4 text-xs mt-3 py-2 text-zinc-500">
            <p>Provider</p>
            <p>Amount</p>
          </div>

          <div className="divide-y mb-12 h-[400px] overflow-y-auto ">
            {providersRateHistories?.length > 0 ? (
              providersRateHistories.map((providersRateHistor) => (
                <RateList
                  key={providersRateHistor.id}
                  name={providersRateHistor.name}
                  amount={localCurrencyFormater(
                    providersRateHistor.rate,
                    "NGN"
                  )}
                  time={localTimeFormater(
                    providersRateHistor.updated_at as Date
                  )}
                  date={localDateFormater(
                    providersRateHistor.updated_at as Date
                  )}
                />
              ))
            ) : (
              <EmptyUI message="No rate histories yet" />
            )}
          </div>

          <div className="border-t">
            <div className="bg-white space-x-2 py-4 flex place-content-center">
              <button className={paginationBtn} onClick={prevPage}>
                {" "}
                Preview{" "}
              </button>
              {/* <button className={paginationBtn}> 1 </button>
                  <button className={paginationBtn}> 2 </button> */}
              <button className={paginationBtn} onClick={nextPage}>
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
