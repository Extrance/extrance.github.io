import { IconButton, Tooltip } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const CheckButton = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="secondary"
        >
          <CheckIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default CheckButton;