import { IconButton, Tooltip } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import "../../../index.css";

const ReplayLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton {...props} aria-label="search-button">
        <ReplayIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ReplayLogo;
