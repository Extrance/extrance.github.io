import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const AddButton = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <IconButton
        {...props}
        component={props.disabled ? "div" : undefined}
        sx={props.sx}
        aria-label="add-button"
        color="primary"
      >
        <AddCircleIcon fontSize={props.size} />
      </IconButton>
    </Tooltip>
  );
};

export default AddButton;
