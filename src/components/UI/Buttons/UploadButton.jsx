import { Button, Tooltip } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';

const UploadButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={props.color}
        startIcon={<UploadIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default UploadButton;
