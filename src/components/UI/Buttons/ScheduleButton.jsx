import { IconButton, Tooltip } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';

const ScheduleButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="start-button"
          color="primary"
        >
          <ConstructionIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ScheduleButton;
