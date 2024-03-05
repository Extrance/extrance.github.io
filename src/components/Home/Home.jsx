import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import AvengerTable from "../common/table/AvengerTable";
import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { useMemo } from "react";

import collection from '../../db/collection.json';

const Home = () => {
  const { t } = useTranslation();

  const [filteredData, setFilteredData] = useState(collection.data);

  useEffect(() => {
    document.title = "Ball's Collection";
  }, []);

  const columns = useMemo(() => {
    return [
      {
        header: t("id"),
        accessorKey: "id",
        size: "small",
      },
      {
        header: t("brand"),
        accessorKey: "brand",
        size: "small",
      },
      {
        header: t("subBrand"),
        accessorKey: "subBrand",
        size: "small",
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
      {
        header: t("pieces"),
        accessorKey: "pieces",
        size: "small",
      },
    ];
  }, []);

  return (
    <BoxStyle>
      <BoxContainerStyle>
        <AvengerTable
          columns={columns}
          data={filteredData}
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
