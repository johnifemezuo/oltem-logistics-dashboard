import React from "react";
import ContentLoader from "react-content-loader";
import { TrxnLoading } from "./TrxnLoading";

export function TxnLoadingSkeleton() {
  return (
    <div className="w-full">
      <ContentLoader
        height={155}
        width={900}
        viewBox="0 0 320 54"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="12" cy="22" r="9" />
        <rect x="30" y="14" rx="3" ry="1" width="50" height="8" />
        <rect x="30" y="26" rx="3" ry="0" width="40" height="4" />
        <rect x="270" y="20" rx="3" ry="1" width="35" height="8" />
      </ContentLoader>
      <div className="-mt-14">
        <ContentLoader
          height={155}
          width={900}
          viewBox="0 0 320 54"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="12" cy="22" r="9" />
          <rect x="30" y="14" rx="3" ry="1" width="50" height="8" />
          <rect x="30" y="26" rx="3" ry="0" width="40" height="4" />
          <rect x="270" y="20" rx="3" ry="1" width="35" height="8" />
        </ContentLoader>
      </div>

      <TrxnLoading text="Loading Transactions" />
    </div>
  );
}
