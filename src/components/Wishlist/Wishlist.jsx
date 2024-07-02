import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useMemo } from "react";
import { useAlert } from "../../store/AlertProvider";
import { useWindowSize } from "../../store/ResizeProvider";
import { Table } from "../common";

import styled from "@emotion/styled";
import LinkLogo from "../UI/Buttons/LinkLogo";

const Wishlist = () => {
  const { t } = useTranslation();
  const alert = useAlert();
  const windowSize = useWindowSize();

  const [data, setData] = useState([]);
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
        .catch(() => alert.showErrorAlert(t("errorRetrieve")))
        .finally(() => setUpdate(!update));
    };
    fetchData();
    filter();
  }, []);

  useEffect(() => {
    if (update !== null) filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const filter = () => {
    /*fetch(`https://eu-central-1.aws.data.mongodb-api.com/app/application-0-tvewibr/endpoint/entrypoint`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setFilteredData(data);
    });*/
    setFilteredData(data);
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
      {
        header: "",
        accessorKey: "link",
        size: "small",
        cell: ({ row }) => (
          <LinkLogo
            props={{
              onClick: () => window.open(row.original.ref, "_blank")
            }}
          />
        ),
      },
    ];
  }, [filteredData]);

  return (
    <Box>
      <BoxStyle>
        <Table
          columns={columns}
          isToolbarVisible={true}
          title={t("Wishlist")}
          data={filteredData}
          hiddenColumns={{id: windowSize.width > 600}}
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
