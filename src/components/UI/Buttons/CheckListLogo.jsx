import { IconButton, Tooltip } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';

const CheckListLogo = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="search-button"
          color="inherit"
        >
          <ChecklistIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default CheckListLogo;