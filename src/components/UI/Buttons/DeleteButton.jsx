import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          component={props.disabled ? "div" : undefined}
          aria-label="delete-button"
          color="down"
        >
          <DeleteIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default DeleteButton;
