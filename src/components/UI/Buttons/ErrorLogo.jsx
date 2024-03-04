import { IconButton, Tooltip } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

const ErrorLogo = ({tooltipLabel, props, placement, style}) => {
  
  return (
    <CustomWidthTooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="search-button"
          color={props.color}
        >
          <ErrorIcon size={props.size} style={style}/>
        </IconButton>
      </span>
    </CustomWidthTooltip>
  );
};

export default ErrorLogo;

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 800,
    /*whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',*/
  },
});