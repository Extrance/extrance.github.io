import { Button, Tooltip } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={props.color}
        startIcon={<DownloadIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default DownloadButton;
