import { Button } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FilterButtonWithoutLabel = (props) => {
  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      aria-label="cancel-button"
    >
      <FilterAltIcon />
    </Button>
  );
};

export default FilterButtonWithoutLabel;
