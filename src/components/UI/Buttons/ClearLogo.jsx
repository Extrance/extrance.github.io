import { IconButton, Tooltip } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const ClearLogo = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="clear-button"
          color="primary"
        >
          <ClearIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ClearLogo;