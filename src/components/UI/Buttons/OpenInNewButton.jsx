import { IconButton, Tooltip } from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const OpenInNewButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <IconButton
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="openInNew"
      >
        <OpenInNewOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};

export default OpenInNewButton;
