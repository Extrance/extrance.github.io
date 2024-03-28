import { Box, Stack } from "@mui/material";
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
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    document.title = "Ball's Collection - Wishlist";
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Extrance/data/main/wishlist.json"
      )
        .then((res) => res.json())
        .then((out) => setData(out.data))
        .catch(() => alert.showErrorAlert("Error while retrieving data"))
        .finally(() => setUpdate(!update));
    };
    fetchData();
    filter();
  }, []);

  useEffect(() => {
    if(update !== null)
      filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const filter = () => {
    setFilteredData(data.filter((item) => item.status === "WANTED"));
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
        cell: (({ row }) => (
          <Stack display="flex" justifyContent="center" minHeight="33px"><div>{row.original.brand}</div>{row.original?.subBrand && <div style={{ fontSize: 10 }}>{row.original.subBrand}</div>}</Stack>
        )),
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
    ];
  }, [filteredData]);

  return (
    <Box>
      <BoxStyle>
        <AvengerTable
          columns={columns}
          isToolbarVisible={true}
          title={t("Wishlist")}
          data={filteredData}
          isPaginated={true}
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
