import { IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchLogo = ({ tooltipLabel, props, placement }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement ?? "bottom"}>
      <span>
        <IconButton
          {...props}
          aria-label="search-button"
          type={props?.type ?? "submit"}
          size={props?.size ?? "small"}
          color={props?.color ?? "primary"}
        >
          <SearchIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default SearchLogo;
