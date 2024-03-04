import { IconButton, Tooltip } from "@mui/material";
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';

const DuplicateLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="edit-button"
        color="inherit"
      >
        <ControlPointDuplicateIcon size={props.size} />
      </IconButton>
    </Tooltip>
  );
};

export default DuplicateLogo;
