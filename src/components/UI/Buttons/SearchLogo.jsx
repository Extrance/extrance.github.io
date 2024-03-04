import { IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchLogo = ({tooltipLabel, props, placement}) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="primary"
        >
          <SearchIcon size={props.size} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default SearchLogo;