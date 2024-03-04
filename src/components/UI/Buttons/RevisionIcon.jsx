import { IconButton, Tooltip } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';

const RevisionIcon = ({tooltipLabel, props}) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          aria-label="star-button"
          color="primary"
        >
          <UpdateIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default RevisionIcon;