import { useGetRequest } from "../../../base";
import { ITransaction } from "../../Pages";

interface IUseTransaction {
  transactionId: string;
}
export const useTransaction = ({ transactionId }: IUseTransaction) => {
  const { isLoading, data } = useGetRequest<ITransaction>({
    load: true,
    path: `/transactions/transactions/${transactionId}`,
  });

  const transaction = data?.data ?? ({} as ITransaction);
  return { isLoading, transaction };
};
