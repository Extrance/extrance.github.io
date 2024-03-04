import { IconButton, Tooltip } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const StartLogo = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color={props.color}
        >
          <PlayCircleOutlineIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StartLogo;