import { useMemo } from "react";
import {
  ICountry,
  localCurrencyFormater,
  localDateFormater,
  queryClient,
} from "../../../base";
import { ReviewTxns } from "../../../styles/styles";
import { CustomButton } from "../../Form";
import ReviewTxn from "../Elements/ReviewtTxn";
import { TransactionDetailsProps } from "./TransactionDetails";
import { useUpdateExchangeTransaction } from "./useUpdateExchangeTransaction";

type ICountriesData = { data: { countries: ICountry[] } };
type IcurrenciesData = { data: { currencies: ICountry[] } };
export const ExchangeTransactionView = ({
  transaction,
}: TransactionDetailsProps) => {
  const countriesData: ICountriesData = queryClient.getQueryData([
    "/rates/countries",
    {},
  ]) as ICountriesData;

  const currenciesData: IcurrenciesData = queryClient.getQueryData([
    "/rates/currencies",
    {},
  ]) as IcurrenciesData;

  const countries = countriesData.data.countries;
  const currencies = currenciesData.data.currencies;

  const country = useMemo(
    () =>
      countries?.find(
        (country) => country.id === transaction?.beneficiary?.country_id
      ),
    [countries, transaction]
  );

  const currency = useMemo(
    () =>
      currencies?.find(
        (currency) => currency.id === transaction?.derivedPrice?.buy_currency_id
      ),
    [currencies, transaction]
  );
  const { handleUpdateTransaction, isLoading } = useUpdateExchangeTransaction({
    transactionId: transaction.id,
  });

  const completeTransaction = () => {
    handleUpdateTransaction("completed");
  };
  const failTransaction = () => {
    handleUpdateTransaction("failed");
  };

  const transactionStatus = transaction.transactionStatus;

  return (
    <>
      <div className=" divide-y mt-8">
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(transaction.amount, "NGN")}
            label={"Amount sent"}
            customStyle="text-left"
          />
          <ReviewTxn
            detail={localCurrencyFormater(transaction.recipient_amount, "USD")}
            label="Amount Recipient Received"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={localDateFormater(transaction.created_at)}
            label="Date"
            customStyle="text-left"
          />
        </ReviewTxns>
        <h2 className="mt-5 border-none font-semibold text-blue-900 text-lg">
          Beneficiary Information
        </h2>
        <ReviewTxns>
          <ReviewTxn
            detail={transaction.beneficiary.fullname}
            label={"Beneficiary name"}
            customStyle="text-left"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={country?.name}
            label="Country"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={currency?.name}
            label="Currency"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={transaction.beneficiary.account_number}
            label="Account number"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={transaction.beneficiary.bank_name}
            label="Bank Name"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={transaction.beneficiary.routing_number}
            label="Account number"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={transaction.beneficiary.swift_code}
            label="Bank Name"
            customStyle="text-right"
          />
        </ReviewTxns>
        <h2 className="mt-5 border-none font-semibold text-blue-900 text-lg">
          Exchange Information
        </h2>
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(
              transaction.derivedPrice.zigah_rate,
              "NGN"
            )}
            label="Zigah Rate"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={localCurrencyFormater(
              transaction.derivedPrice.zigah_charge,
              "USD"
            )}
            label="Zigah Charge"
            customStyle="text-right"
          />
        </ReviewTxns>
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(
              transaction.derivedPrice.wallet_funding_charge_ngn,
              "NGN"
            )}
            label="Wallet funding Charge"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={localCurrencyFormater(
              transaction.derivedPrice.zigah_profit,
              "NGN"
            )}
            label="Zigah Profit"
            customStyle="text-right"
          />
        </ReviewTxns>
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(
              transaction.derivedPrice.zigah_percentage,
              "NGN"
            )}
            label="Zigah Percentage"
            customStyle="text-left"
          />
        </ReviewTxns>
        <h2 className="mt-5 border-none font-semibold text-blue-900 text-lg">
          Provider Information
        </h2>
        <ReviewTxns>
          <ReviewTxn
            label="Provider name"
            detail={transaction.derivedPrice.provider.name}
            customStyle="text-left"
          />
          <ReviewTxn
            label="Provider rate"
            detail={localCurrencyFormater(
              transaction.derivedPrice.provider.rate,
              "NGN"
            )}
            customStyle="text-left"
          />
        </ReviewTxns>
        <ReviewTxns>
          <ReviewTxn
            detail={"invoice.png"}
            label="Invoice"
            customStyle="text-left"
          />
          <ReviewTxn detail={"view"} label="" customStyle="text-right" />
        </ReviewTxns>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-12">
        {transactionStatus.name === "pending" ? (
          <>
            <CustomButton
              onClick={failTransaction}
              className="text-primary-color  border"
              bg_color="bg-zinc-100 hover:bg-zinc-200/70"
            >
              Treat as Failed
            </CustomButton>

            <CustomButton isLoading={isLoading} onClick={completeTransaction}>
              Treat as Successful
            </CustomButton>
          </>
        ) : (
          <>
            {transactionStatus.name === "completed" ? (
              <div className="mt-12">
                <CustomButton
                  className="bg-[#E2FFE7] transition hover:bg-[#cff4d5] mx-auto text-success-color "
                  bg_color="bg-zinc-100 hover:bg-zinc-200/70"
                >
                  Successful
                </CustomButton>
              </div>
            ) : null}

            {transactionStatus.name === "failed" ? (
              <div className="mt-12">
                <CustomButton
                  className="bg-[#ffe2e2] transition hover:bg-[#f4cfcf] w-[150px] mx-auto text-danger-color "
                  bg_color="bg-zinc-100 hover:bg-zinc-200/70"
                >
                  Failed
                </CustomButton>
              </div>
            ) : null}
          </>
        )}
      </div>

      <div className="mt-20"></div>
    </>
  );
};
