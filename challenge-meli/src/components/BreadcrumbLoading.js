import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./../styles/breadcrumbLoading.css";

function BreadcrumbLoading() {
  return (
    <SkeletonTheme color="#e6e6e6" highlightColor="#e2e2e2">
      <li>
        <Skeleton width={200} />
      </li>
      <li>
        <Skeleton width={150} />
      </li>
    </SkeletonTheme>
  );
}

export default BreadcrumbLoading;
