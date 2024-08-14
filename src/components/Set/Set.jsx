import { Box, Button, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../store/ResizeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../../store/AlertProvider";

import styled from "@emotion/styled";
import { BULLET } from "../Router/paths";

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
        `https://raw.githubusercontent.com/Extrance/data/main/data/${pathname.split("/Collection/")[1]
        }.json`
      )
        .then((res) => res.json())
        .then((out) => setData(out))
        .catch((e) => alert.showErrorAlert(t("errorRetrieve")))
        .finally(() => setUpdate(!update));
    };
    fetchData();
  }, []);

  return update ? (
    data ? (
      <BoxStyle>
        <Stack spacing={1} direction="row">
          <b>{data?.name}</b>
          <div style={data?.brand === "moc" ? { fontStyle: "italic" } : {}}>
            ({data?.brand})
          </div>
        </Stack>

        <Stack spacing={2} marginTop="10px">
          <Divider />
          <div>{t("scale")}: {data?.features?.scale}</div>
          <Stack>
            <div>{t("length")}: {data?.features?.measures?.length} {t("cm")}</div>
            <div>{t("width")}: {data?.features?.measures?.width} {t("cm")}</div>
            <div>{t("height")}: {data?.features?.measures?.height} {t("cm")}</div>
          </Stack>
        </Stack>
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
              navigate(BULLET.WHOAMI);
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
