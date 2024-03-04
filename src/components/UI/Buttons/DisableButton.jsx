import { IconButton, Tooltip } from "@mui/material";
import StopCircleIcon from '@mui/icons-material/StopCircle';

const DisableButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement={props.placement}>
      <span>
        <IconButton
          {...props}
          component={props.hidden ? "div" : undefined}
          aria-label="cancel-button"
          color="down"
          size={props.size}
        >
          <StopCircleIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default DisableButton;
