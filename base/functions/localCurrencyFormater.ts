import "intl";
import "intl/locale-data/jsonp/en";

export const localCurrencyFormater = (num: number | bigint) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(num);
};
