import { Button } from "@mui/material";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const ClearFilterButton = (props) => {
  return (
    <Button
      {...props}
      variant="outlined"
      color="primary"
      aria-label="cancel-button"
    >
      <FilterAltOffIcon />
    </Button>
  );
};

export default ClearFilterButton;
