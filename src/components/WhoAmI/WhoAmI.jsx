import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpeedDial from "../common/custom/SpeedDial";
import styled from "@emotion/styled";
import TechShowcase from "../UI/TechShowcase";

const WhoAmI = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("applicationName");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoxStyle>
      <div>{t("wai_introduction")}</div>
      <br />
      <div>{t("wai_idea")}</div>
      <div>{t("wai_motivations")}</div>
      <br />
      <div>{t("wai_disclaimer")}</div>
      <br />
      <div style={{ float: "right" }}>Enjoy!</div>
      <br />
      <TechShowcase />
      <div>
        <Accordion
          disableGutters
          style={{
            marginTop: "30px",
            borderRadius: "6px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {t("wai_cv_studies").toUpperCase()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography>
                  2020-2023: Università di Trento - Laurea Magistrale in
                  Informatica
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  2016-2020: Università di Trento - Laurea Triennale in
                  Informatica
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  2011-2016: Liceo Scientifico N. Tron, Schio (VI) - Diploma
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          disableGutters
          style={{
            marginBottom: "100px",
            marginTop: "30px",
            borderRadius: "6px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {t("wai_cv_work").toUpperCase()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <Typography>
                  giu 2023 - oggi: Technology Reply SpA - Junior Consultant
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  lug 2019 - dic 2019: BFT SpA - Stage
                </Typography>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
      <SpeedDial />
    </BoxStyle>
  );
};

export default WhoAmI;

const BoxStyle = styled(Box)(() => ({
  marginTop: "20px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
