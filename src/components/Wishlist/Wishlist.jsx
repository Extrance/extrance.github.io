import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import AvengerTable from "../common/table/AvengerTable";
import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { useMemo } from "react";

import collection from '../../db/collection.json';

const Wishlist = () => {
  const { t } = useTranslation();

  const [filteredData, setFilteredData] = useState(collection.data.filter((item) => (item.status === "WANTED")));

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
        cell: (({row}) => (
          <div diplay="block"><div>{row.original.brand}</div><div style={{fontSize: 10}}>{row.original.subBrand}</div></div>
        )),
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
    ];
  }, []);

  return (
    <Box>
      <BoxStyle>
        <AvengerTable
          columns={columns}
          isToolbarVisible={true}
          title={t("Wishlist")}
          data={filteredData}
          size="small"
          warning="noSetFound"
          rowsperpageslist={[10, 50, 100]}
        />
      </BoxStyle>
    </Box>
  );
};

export default Wishlist;

const BoxStyle = styled(Box)(() => ({
  paddingLeft: "25px",
  paddingRight: "25px",
}));
