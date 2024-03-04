import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="edit-button"
        color="warning"
      >
        <EditIcon size={props.size} />
      </IconButton>
    </Tooltip>
  );
};

export default EditLogo;
