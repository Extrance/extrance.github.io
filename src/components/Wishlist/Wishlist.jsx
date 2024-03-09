import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import AvengerTable from "../common/table/AvengerTable";
import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useAlert } from "../../store/AlertProvider";

const Wishlist = () => {
  const { t } = useTranslation();
  const alert = useAlert();

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    document.title = "Ball's Collection - Wishlist";
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Extrance/data/main/wishlist.json"
      )
        .then((res) => res.json())
        .then((out) => setData(out.data))
        .catch(() => alert.showErrorAlert("Error while retrieving data"));
    };
    fetchData();
    filter();
  }, []);

  const filter = () => {
    setFilteredData(
      data.filter(
        (item) =>
          item.status === "OWNED" &&
          item.id.includes(num) &&
          item.name.includes(name)
      )
    );
  };

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
