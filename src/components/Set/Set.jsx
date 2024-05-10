import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../store/ResizeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../../store/AlertProvider";

import styled from "@emotion/styled";

const Set = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const windowSize = useWindowSize();
  const alert = useAlert();
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://raw.githubusercontent.com/Extrance/data/main/reviews/${
          pathname.split("/Home/")[1]
        }.json`
      )
        .then((res) => res.json())
        .then((out) => setData(out))
        .catch((e) => console.log(e))
        .finally(() => setUpdate(!update));
    };
    fetchData();
  }, []);

  return update ? (
    data ? (
      <BoxStyle>
        <b>{data?.name}</b>
        <div style={data?.brand === "moc" ? { fontStyle: "italic" } : {}}>
          {data?.brand}
        </div>
      </BoxStyle>
    ) : (
      <BoxStyle display="flex" justifyContent="center">
        <Stack spacing={2}>
          <div>{t("missingData")}</div>
          <Button
            variant="outlined"
            color="primary"
            aria-label="gotohome-button"
            onClick={() => {
              navigate("/Home");
            }}
          >
            {t("goToHomeButton")}
          </Button>
        </Stack>
      </BoxStyle>
    )
  ) : null;
};

export default Set;

const BoxStyle = styled(Box)(() => ({
  marginTop: "20px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
