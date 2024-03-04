import { Button, Tooltip } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="save-button"
        color="primary"
        startIcon={<FilterAltIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default FilterButton;
