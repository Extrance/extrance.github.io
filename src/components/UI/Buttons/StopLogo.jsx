import { IconButton, Tooltip } from "@mui/material";
import DangerousIcon from '@mui/icons-material/Dangerous';

const StopLogo = ({tooltipLabel, props}) => {
  return (
    <Tooltip title={tooltipLabel} placement="left">
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="error"
        >
          <DangerousIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StopLogo;