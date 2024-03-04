import { IconButton, Tooltip } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const MoveUpLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="edit-button"
        color="inherit"
      >
        <KeyboardDoubleArrowUpIcon size={props.size} />
      </IconButton>
    </Tooltip>
  );
};

export default MoveUpLogo;
