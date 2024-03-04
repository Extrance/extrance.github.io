import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import AvengerTable from "../common/table/AvengerTable";
import styled from "@emotion/styled";

import { useEffect } from "react";
import { useMemo } from "react";

const Home = () => {
  const { t } = useTranslation();

  const list = [
    {
      hamId: "iu3byv",
    },
    {
      hamId: "ik3fhp",
    },
    {
      hamId: "ik3fho",
    },
    {
      hamId: "iq3bm",
    },
    {
      hamId: "ii3ww",
    },
  ];

  useEffect(() => {
    document.title = "Ball's Collection";
  }, []);

  const columns = useMemo(() => {
    return [
      {
        header: t("hamId"),
        accessorKey: "hamId",
        size: "small",
      },
    ];
  }, []);

  return (
    <BoxStyle>
      <BoxContainerStyle>
        <AvengerTable
          columns={columns}
          data={list}
          size="small"
          warning="noProcessFound"
          rowsperpageslist={[10, 50, 100]}
        />
      </BoxContainerStyle>
    </BoxStyle>
  );
};

export default Home;

const BoxStyle = styled(Box)(() => ({
  height: "100%",
  width: "100%",
}));

const BoxContainerStyle = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  marginTop: "21px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
