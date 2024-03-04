import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const InfoLogo = ({tooltipLabel, props, placement, style}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="search-button"
          color={props.color}
        >
          <InfoIcon size={props.size} style={style}/>
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default InfoLogo;