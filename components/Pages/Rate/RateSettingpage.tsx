import { useEffect, useMemo, useState } from "react";
import {
  localCurrencyFormater,
  localDateFormater,
  localDateFormaterLong,
  localTimeFormater,
} from "../../../base";
import { ReviewTxns } from "../../../styles/styles";
import { CustomButton, CustomInput } from "../../Form";
import { EmptyUI } from "../../UI";
import DropdownSelect from "../../UI/DropdownSelect";
import ReviewTxn from "../../UI/Elements/ReviewtTxn";
import { RateList } from "./RateList";
import { RateSettingLoading } from "./RateSettingLoading";
import { useGetRateProviders } from "./useGetRateProviders";
import { useRateHistories } from "./useRateHistories";
import { useUpdateRateProviders } from "./useUpdateRateProviders";
const paginationBtn =
  "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";

export function RateSettingPage() {
  const [selected, setSelected] = useState<any>("");
  const [suspend, setSuspended] = useState<boolean>(false);
  const [isSettlement, setIsSettlement] = useState<boolean>(false);

  const { isLoading, prevPage, nextPage, providersRateHistories } =
    useRateHistories();
  const { providers, isLoading: isLoadingProviders } = useGetRateProviders();
  const {
    updateProviders,
    register,
    isLoading: isPatching,
  } = useUpdateRateProviders({
    providerId: selected,
    suspend,
    isSettlement,
  });

  const provider = useMemo(
    () => providers.find((provider) => provider.id === selected),
    [selected]
  );

  useEffect(() => {
    if (selected) {
      if (provider) {
        setSuspended(provider.is_suspended);
        setIsSettlement(provider.includes_settlement);
      }
    }
  }, [selected]);

  return (
    <div className="md:w-[1000px] capitalize space-y-8 mx-auto py-16 h-auto w-full mb-16">
      <div className="w-[800px]">
        {isLoadingProviders || isLoading ? null : (
          <>
            <h2 className="text-xl font-semibold text-primaryText-color">
              Input Your rates
            </h2>
            <div className="space-y-5 mt-4 grid grid-cols-2 space-x-4 content-start	">
              <form onSubmit={updateProviders}>
                <div className="mb-2">
                  <DropdownSelect
                    options={providers}
                    selected={selected}
                    setSelected={setSelected}
                    title="Select provider"
                  />
                </div>
                <CustomInput
                  label="Rate amount"
                  placeholder="Rate amount"
                  type="text"
                  register={register("rate")}
                  value={provider?.rate as any}
                />

                <p className="pt-4 pb-1 text-gray-700">
                  Suspend this provider?
                </p>
                <DropdownSelect
                  options={[
                    {
                      name: "Yes",
                      id: true,
                    },
                    {
                      name: "No",
                      id: false,
                    },
                  ]}
                  selected={suspend}
                  setSelected={setSuspended}
                  title="select and option"
                />

                <p className="pt-4 pb-1 text-gray-700">
                  Does provider includes settlement?
                </p>
                <DropdownSelect
                  options={[
                    {
                      name: "Yes",
                      id: true,
                    },
                    {
                      name: "No",
                      id: false,
                    },
                  ]}
                  selected={isSettlement}
                  setSelected={setIsSettlement}
                  title="select and option"
                />
                <CustomButton
                  isLoading={isPatching}
                  type="submit"
                  className="mt-2 w-[100px]"
                >
                  Save
                </CustomButton>
              </form>
              <div className="px-4 py-2 rounded-lg shadow bg-blue-50">
                <h1 className="py-1 mb-2 text-lg border-b">Providers rate</h1>
                {providers.map((provider) => (
                  <>
                    <ReviewTxns>
                      <ReviewTxn
                        label="Provider name"
                        detail={provider.name}
                        customStyle="text-left"
                        date={localDateFormaterLong(
                          provider.updated_at as Date
                        )}
                        time={localTimeFormater(
                          provider.updated_at as Date
                        )}
                      />
                      <ReviewTxn
                        label="Provider rate"
                        detail={localCurrencyFormater(provider.rate, "NGN")}
                        customStyle="text-left"
                      />
                    </ReviewTxns>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {isLoading ? (
        <RateSettingLoading />
      ) : (
        <div className="pt-12 borer-t w-[800px]">
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
