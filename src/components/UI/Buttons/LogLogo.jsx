import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';

const LogLogo = ({tooltipLabel, props, placement, color, icon}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color={color}
        >
          {icon === "allLogs" ? <ContentCopyIcon size={props.size} /> : (
            icon === "lastLog_error" ? <AssignmentLateIcon size={props.size} /> : (
              icon === "lastLog" ? <AssignmentTurnedInIcon size={props.size} /> :<AssignmentIcon size={props.size} />
          ))}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default LogLogo;