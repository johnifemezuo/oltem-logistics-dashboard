import React from 'react'
import ContentLoader from 'react-content-loader';
import { LoadingIcon } from '../Users/LoadingIcon';

export function RateSettingLoading() {
  return (
    <div className="w-[900px] -ml-14">
      <div className="w-full relative">
        <ContentLoader
          height={155}
          width={900}
          viewBox="0 0 320 54"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="20" y="20" rx="3" ry="1" width="50" height="8" />
          <rect x="300" y="20" rx="3" ry="1" width="35" height="8" />
          <rect x="170" y="20" rx="3" ry="1" width="35" height="8" />
          <rect x="100" y="20" rx="3" ry="1" width="35" height="8" />
          <rect x="230" y="20" rx="3" ry="1" width="35" height="8" />
          <rect x="170" y="20" rx="3" ry="1" width="35" height="8" />
        </ContentLoader>

        <div className="-mt-24">
          <ContentLoader
            height={155}
            width={900}
            viewBox="0 0 320 54"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="20" rx="3" ry="1" width="50" height="8" />
            <rect x="300" y="20" rx="3" ry="1" width="35" height="8" />
            <rect x="170" y="20" rx="3" ry="1" width="35" height="8" />
            <rect x="100" y="20" rx="3" ry="1" width="35" height="8" />
            <rect x="230" y="20" rx="3" ry="1" width="35" height="8" />
            <rect x="170" y="20" rx="3" ry="1" width="35" height="8" />
          </ContentLoader>
        </div>

        <div className="mb-12 m">
          <LoadingIcon text="Loading Rate History" />
        </div>
      </div>
    </div>
  );
}
