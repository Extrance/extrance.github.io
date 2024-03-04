import { Button, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color="primary"
        startIcon={<SearchIcon />}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default SearchButton;
