import "./WhoAmI.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpeedDial from "../common/custom/SpeedDial";
import styled from "@emotion/styled";
import TechShowcase from "../UI/TechShowcase";
import HardSkills from "../UI/HardSkills";
import SoftSkills from "../UI/SoftSkills";
import BFTLogo from '../../imgs/bft.png';
import ReplyLogo from '../../imgs/reply.png';
import ComuneLogo from '../../imgs/comune.png';
import EducationAccordion from './EducationAccordion';
import CareerAccordion from './CareerAccordion';

const WhoAmI = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("applicationName");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoxStyle>
      <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 3 }}>
        <div>{t("wai_introduction")}</div>
        <br />
        <div>{t("wai_idea")}</div>
        <div>{t("wai_motivations")}</div>
        <br />
        <div>{t("wai_disclaimer")}</div>
        <br />
        <div style={{ float: "right" }}>Enjoy!</div>
        <br />
      </Paper>


  <TechShowcase />
  <HardSkills />
  <SoftSkills />
      <CareerAccordion />
      <EducationAccordion />

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
