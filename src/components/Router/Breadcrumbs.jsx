import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
  };

  const path = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .slice(0, -1);
  let depth = -1 * path.length;
  const crumbs = path.map((crumb) => {
    let nav = depth;
    depth = depth + 1;
    return (
      <Button key={crumb} onClick={() => navigate(nav)}>
        <Typography variant="hComponent" fontSize="12px" color="common.white" marginBottom="-2px">
          {t(crumb)}
        </Typography>
        <KeyboardDoubleArrowRightIcon color="table" />
      </Button>
    );
  });

  return (
    <div role="presentation" onClick={handleClick}>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
