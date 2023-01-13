import React from "react";

type IReview = {
  customStyle?: string;
  label: string;
  detail: string | undefined;
};

export default function ReviewTxn({ customStyle, label, detail }: IReview) {
  return (
    <div className={`grid gap-2 ${customStyle}`}>
      <p className="text-zinc-500 text-sm">{label}</p>
      <h2 className="font-medium text-primary-color text-base">{detail}</h2>
    </div>
  );
}
