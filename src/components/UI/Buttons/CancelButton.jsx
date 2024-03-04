import { Button, Tooltip } from "@mui/material";

const CancelButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        variant="outlined"
        color={props.color}
        aria-label="cancel-button"
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default CancelButton;
