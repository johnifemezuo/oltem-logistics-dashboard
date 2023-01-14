import "intl";
import "intl/locale-data/jsonp/en";

type CurrencyType = "NGN" | "USD";
export const localCurrencyFormater = (
  num: number | bigint,
  currency: CurrencyType
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(num);
};
