import { IconButton, Tooltip } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const MoveDownLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="edit-button"
        color="inherit"
      >
        <KeyboardDoubleArrowDownIcon size={props.size} />
      </IconButton>
    </Tooltip>
  );
};

export default MoveDownLogo;
