import { Button, Tooltip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const SaveButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="bottom">
      <span>
        <Button
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="save-button"
          color="primary"
          startIcon={<SaveIcon />}
        >
          {props.label}
        </Button>
      </span>
    </Tooltip>
  );
};

export default SaveButton;
