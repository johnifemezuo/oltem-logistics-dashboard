import React, { useState } from 'react'
import { ReviewTxns } from '../../../styles/styles'
import { CustomButton } from '../../Form';
import ReviewTxn from '../Elements/ReviewtTxn'

export function TransactionPreviewModal({ data }: { data: any }) {
  const [isSuccessfull, setIsSuccessful] = useState(false);  
  const [isFailed, setIsFailed] = useState(false);  
  return (
    <div>
      <h1 className="text-2xl text-center  font-semibold">
        Pending Transactions
      </h1>

      <div className=" divide-y mt-8">
        <ReviewTxns>
          <ReviewTxn detail={data?.data?.amount} label="Amount sent" customStyle="text-left" />

          <ReviewTxn
            detail={`${"$5000.00"}`}
            label="Amount Recieved"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={"$25003"}
            label="Total amount"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={data?.data?.date}
            label="Date"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={data?.data?.account_name}
            label="Recipient"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={data?.data?.account_number}
            label="Account details"
            customStyle="text-right"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={data?.data?.country}
            label="Country"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={data?.data?.currency}
            label="Currency"
            customStyle="text-right"
          />
        </ReviewTxns>
      </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <CustomButton
            onClick={() => setIsFailed(true)}
            className="text-primary-color  border"
            bg_color="bg-zinc-100 hover:bg-zinc-200/70"
          >
            Treat as Failed
          </CustomButton>

          <CustomButton onClick={() => setIsSuccessful(true)}>Treat as Successful</CustomButton>
        </div>

      {isSuccessfull ? (
        <div className="mt-12">
          <CustomButton
            onClick={() => setIsSuccessful(false)}
            className="bg-[#E2FFE7] transition hover:bg-[#cff4d5] mx-auto text-success-color "
            bg_color="bg-zinc-100 hover:bg-zinc-200/70"
          >
            Successful
          </CustomButton>
        </div>
      ) : null}

      {isFailed ? (
        <div className="mt-12">
          <CustomButton
            onClick={() => setIsFailed(false)}
            className="bg-[#ffe2e2] transition hover:bg-[#f4cfcf] w-[150px] mx-auto text-danger-color "
            bg_color="bg-zinc-100 hover:bg-zinc-200/70"
          >
            Failed
          </CustomButton>
        </div>
      ) : null}
    </div>
  );
}

