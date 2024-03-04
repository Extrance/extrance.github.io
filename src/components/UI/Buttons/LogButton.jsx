import { Button, Tooltip } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';

const LogButton = ({tooltipLabel, props, color, icon }) => {
  return (
    <Tooltip title={tooltipLabel} placement="bottom">
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={color !== "default" ? color : "inherit"}
      >
        {icon === "allLogs" ? <ContentCopyIcon size={props.size} /> : (
            icon === "lastLog_error" ? <AssignmentLateIcon size={props.size} /> : (
              icon === "lastLog" ? <AssignmentTurnedInIcon size={props.size} /> :<AssignmentIcon size={props.size} />
          ))}
      </Button>
    </Tooltip>
  );
};

export default LogButton;