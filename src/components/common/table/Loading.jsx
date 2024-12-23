import { Skeleton } from "@mui/material";
import { memo } from "react";

/**
 * Loading Component
 *
 * @author Andrea Balasso
 */

const Loading = ({ height }) => {
  return <Skeleton variant="rounded" height={height ?? 80} />;
};

export default memo(Loading);
