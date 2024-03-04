import { IconButton, Tooltip } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

const CancelButtonIcon = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="delete-button"
          color="down"
        >
          <CancelIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default CancelButtonIcon;
