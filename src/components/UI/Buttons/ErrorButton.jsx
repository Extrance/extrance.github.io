import { Button, Tooltip } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

const ErrorButton = ({tooltipLabel, placement, props, label }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={props.color}
        startIcon={<ErrorIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default ErrorButton;