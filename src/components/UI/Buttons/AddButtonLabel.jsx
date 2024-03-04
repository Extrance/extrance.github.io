import { Button, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddButtonLabel = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="save-button"
        sx={props.sx}
        color="primary"
        startIcon={<AddIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default AddButtonLabel;

