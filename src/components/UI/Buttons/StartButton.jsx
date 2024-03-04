import { Button, Tooltip } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StartButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={props.color}
        startIcon={<PlayArrowIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default StartButton;
