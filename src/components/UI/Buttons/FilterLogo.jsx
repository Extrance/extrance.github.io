import { IconButton, Tooltip } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const FilterLogo = ({tooltipLabel, filter, props}) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color={props.color}
        >
          {filter === true ? <FilterAltOffIcon size={props.size} /> : <FilterAltIcon size={props.size} />}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default FilterLogo;