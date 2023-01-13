import React from "react";

function useBankDetails() {
  const { data: walletInfo }: any = () => {};

  const [copied, setCopied] = React.useState(false);

  const clipBoardInfo: any = `
    Account Name: ${walletInfo?.account_name}
    Bank Name: ${walletInfo?.bank_name}
    Account Number : ${walletInfo?.account_number}
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(clipBoardInfo || "");
    setCopied(true);
  };

  React.useEffect(() => setCopied(false), []);

  return {
    walletInfo,
    copied,
    copyToClipboard,
  };
}

export default useBankDetails;
