import { TxnLoadingSkeleton } from "../../Pages";
import { TransactionDetails } from "./TransactionDetails";
import { useCountries } from "./useCountries";
import { useCurrencies } from "./useCurrencies";
import { useTransaction } from "./useTransaction";

export function TransactionPreviewModal({
  transactionId,
}: {
  transactionId: string;
}) {
  const { isLoading, transaction } = useTransaction({
    transactionId: transactionId,
  });
  const { isLoading: countriesIsLoading } = useCountries();
  const { isLoading: currenciesIsLoading } = useCurrencies();

  return (
    <>
      {isLoading || countriesIsLoading || currenciesIsLoading ? (
        <TxnLoadingSkeleton />
      ) : (
        <TransactionDetails transaction={transaction} />
      )}
    </>
  );
}
