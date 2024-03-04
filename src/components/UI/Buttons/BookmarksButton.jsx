import { Button, Tooltip } from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const BookmarksButton = ({ tooltipLabel, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement="right">
      <Button
        {...props}
        // NOTE: Invece di usare lo span, facciamo diventare il button un div
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color="primary"
        startIcon={<BookmarksIcon size="large"/>}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default BookmarksButton;
