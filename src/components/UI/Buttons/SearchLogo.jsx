import { IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement ?? "top-start"}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          color="default"
          type={props?.type ?? "submit"}
          size={props?.size ?? "small"}
        >
          <SearchIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default SearchLogo;
