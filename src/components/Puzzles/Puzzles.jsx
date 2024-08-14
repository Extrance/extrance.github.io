import { Box as MuiBox } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../store/ResizeProvider";
import { useAlert } from "../../store/AlertProvider";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

const Puzzles = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const alert = useAlert();

  const navigate = useNavigate();

  return (
    <Box>
      WORK IN PROGRESS
    </Box>
  );
};

export default Puzzles;

const Box = styled(MuiBox)(() => ({
  marginTop: "20px",
  padding: "0px 25px 0px 25px",
}));
