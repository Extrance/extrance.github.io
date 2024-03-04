import { Button, Tooltip } from "@mui/material";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const ContentButton = ({ tooltipLabel, placement, props }) => {
  return (
    <Tooltip title={tooltipLabel} placement={placement}>
      <Button
        {...props}
        component={props.disabled ? "div" : undefined}
        aria-label="search-button"
        color="primary"
        startIcon={<ContentPasteSearchIcon size="large"/>}
      >
        {props.label}
      </Button>
    </Tooltip>
  );
};

export default ContentButton;
