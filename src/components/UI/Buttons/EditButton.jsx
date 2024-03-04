import { Button, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color={props.color}
        startIcon={<EditIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default EditButton;
