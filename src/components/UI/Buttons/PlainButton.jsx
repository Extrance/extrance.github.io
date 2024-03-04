import { Button, Tooltip } from "@mui/material";

const PlainButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="save-button"
        color={props.color}
        variant={props.variant}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default PlainButton;
