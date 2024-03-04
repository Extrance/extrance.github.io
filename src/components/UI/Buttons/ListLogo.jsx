import { IconButton, Tooltip } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';

const ListLogo = ({tooltipLabel, props}) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="search-button"
          color={props.color}
        >
          <ChecklistIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ListLogo;