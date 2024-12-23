import { IconButton, Tooltip } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

const ClearLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement ?? "bottom"}>
      <span>
        <IconButton
          {...props}
          aria-label="clear-button"
          color="default"
          type={props?.type ?? "cancel"}
          size={props?.size ?? "small"}
          component={props?.disabled ? "div" : undefined}
        >
          <BackspaceIcon size={props?.size ?? "small"} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ClearLogo;
