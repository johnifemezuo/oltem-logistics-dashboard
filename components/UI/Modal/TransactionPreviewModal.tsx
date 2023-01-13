import React from 'react'
import { ReviewTxns } from '../../../styles/styles'
import { CustomButton } from '../../Form';
import ReviewTxn from '../Elements/ReviewtTxn'

function TransactionPreviewModal({ data }: { data: any }) {
  console.log(data.data?.account_name);
  
  return (
    <div>
      <h1 className="text-2xl text-center  font-semibold">Pending Transactions</h1>

      <div className=" divide-y mt-8">
        <ReviewTxns>
          <ReviewTxn detail={data.data.amount} label="Amount sent" customStyle="text-left" />

          <ReviewTxn detail={`${"$5000.00"}`} label="Amount Recieved" customStyle="text-right" />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn detail={"$25003"} label="Total amount" customStyle="text-left" />

          <ReviewTxn detail={data.data?.date} label="Date" customStyle="text-right" />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn detail={data?.data?.account_name} label="Recipient" customStyle="text-left" />

          <ReviewTxn detail={data.data.account_number} label="Account details" customStyle="text-right" />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn detail={data?.data?.country} label="Country" customStyle="text-left" />

          <ReviewTxn detail={data?.data?.currency} label="Currency" customStyle="text-right" />
        </ReviewTxns>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-12">
        <CustomButton
          className="text-primary-color  border"
          bg_color="bg-zinc-100 hover:bg-zinc-200/70"
        >
          Treat as Failed
        </CustomButton>

        <CustomButton>Treat as Failed</CustomButton>
      </div>
    </div>
  );
}

export default TransactionPreviewModal