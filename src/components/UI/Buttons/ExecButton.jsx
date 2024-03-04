import { IconButton, Tooltip } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

const ExecButton = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="primary"
        >
          <AssignmentIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ExecButton;