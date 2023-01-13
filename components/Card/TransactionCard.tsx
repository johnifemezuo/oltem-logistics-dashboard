import { FC } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

interface ITransactionCard { iconBg: string, title: string; amount: string }

export const TransactionCard : FC<ITransactionCard> =({ iconBg, title, amount }) => {
  return (
    <div>
      <div className="border relative  bg-white rounded-md py-6 px-6">
        <div>
          <h2 className="text-zinc-600">{title}</h2>
          <h1 className="mt-3 font-bold text-2xl text-primary-color">{amount}</h1>
        </div>

        <div className={`rounded-full absolute right-5 bottom-5 grid place-content-center w-9 h-9 bg-bg-light-pink ${iconBg}`}>
          <RiSendPlaneFill className="text-xl"/>
        </div>
      </div>
    </div>
  );
}
