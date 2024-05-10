import { IconButton, Tooltip } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const LinkLogo = ({tooltipLabel, props}) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          aria-label="link-button"
          color="primary"
        >
          <OpenInNewIcon size="small" />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default LinkLogo;