import { Box, Button, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../store/ResizeProvider";
import { useAlert } from "../../store/AlertProvider";

import styled from "@emotion/styled";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import SearchLogo from "../UI/Buttons/SearchLogo";
import ClearLogo from "../UI/Buttons/ClearLogo";
import { useNavigate } from "react-router-dom";
import { removeDuplicates } from "../../util/utilFunction";
import {Table} from "../common";
import SpeedDial from "../common/custom/SpeedDial";

const WhoAmI = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const alert = useAlert();

 /* useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Extrance/data/main/collection.json"
      )
        .then((res) => res.json())
        .then((out) => {
          setData(out.data);
          setBrands(removeDuplicates(out.data.map((item) => { return item.brand })));
        })
        .catch(() => alert.showErrorAlert(t("errorRetrieve")))
        .finally(() => setUpdate(!update));
    };
    document.title = "Ball's Collection";
    fetchData();
  }, []);*/

  const navigate = useNavigate();

  return (
    <BoxStyle>
      <div>Ciao a tutti, sono Andrea Balasso e questo è un mio progettino che porto avanti a tempo perso.</div><br/>
      <div>Questa webapp nasce per offrire ai miei amici una lista aggiornata e facilmente consultabile di quello che ho (e specialmente quello che mi manca) per facilitare la scelta all'avvicinarsi del mio compleanno :)</div>
      <div>Già che c'ero, però, ho deciso di sfruttare l'occasione per implementare mano a mano sempre più funzioni, con come obiettivo primario il far pratica con diverse tecnologie, e andare ad offrire sempre più sezioni diverse e opzioni, ad amici e non.</div>
      <br/>
      <div>L'applicazione è attualmente WIP, vedrò di aggiornare il progetto mano a mano che troverò tecnologie che riterrò interessante integrare in questa webapp, ma soprattutto mano a mano che la mia creatività partorirà idee per me divertenti e/o utii per chi frequenta questo sito.</div>
      <br/>
      <div style={{float: 'right', marginBottom: "80px"}}>Enjoy!</div>
      <SpeedDial/>
    </BoxStyle>
  );
};

export default WhoAmI;

const BoxStyle = styled(Box)(() => ({
  marginTop: "20px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
