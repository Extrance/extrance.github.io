import { IconButton, Tooltip } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

const OwnerButton = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="primary"
        >
          <GroupsIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default OwnerButton;