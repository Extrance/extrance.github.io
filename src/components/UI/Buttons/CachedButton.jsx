import { Button } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

const CachedButton = (props) => {
  return (
    <Button
      {...props}
      aria-hidden="true"
      color="primary"
    >
      <CachedIcon />
    </Button>
  );
};

export default CachedButton;
