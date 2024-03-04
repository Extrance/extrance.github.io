import { IconButton, Tooltip } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';

import '../../../index.css'

const CachedLogo = (props) => {
  return (
    <IconButton
      {...props}
      aria-label="search-button"
    >
      <LoopIcon />
    </IconButton>
  );
};

export default CachedLogo;
