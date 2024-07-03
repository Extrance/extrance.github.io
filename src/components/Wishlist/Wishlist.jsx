import { Box, ClickAwayListener, Slider, Stack, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useMemo } from "react";
import { useAlert } from "../../store/AlertProvider";
import { useWindowSize } from "../../store/ResizeProvider";
import { Table } from "../common";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";
import LinkLogo from "../UI/Buttons/LinkLogo";
import SavingsIcon from "@mui/icons-material/Savings";

const Wishlist = () => {
  const { t } = useTranslation();
  const alert = useAlert();
  const windowSize = useWindowSize();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [update, setUpdate] = useState(null);
  const [price, setPrice] = useState(150);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.title = t("applicationName") + " - Wishlist";
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
    setFilteredData(data.filter((item) => item.price <= price));
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
        cell: ({ row }) => (
          <Stack display="flex" justifyContent="center" minHeight="33px">
            <div>{row.original.brand}</div>
            {row.original?.subBrand && (
              <div style={{ fontSize: 10 }}>{row.original.subBrand}</div>
            )}
          </Stack>
        ),
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
              onClick: () => window.open(row.original.ref, "_blank"),
            }}
          />
        ),
      },
    ];
  }, [filteredData]);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setPrice(newValue);
    }
  };

  return (
    <Box>
      <BoxStyle>
        <Grid
          container
          style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}
        >
          <Grid
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Tooltip disableFocusListener title={t("price")} enterTouchDelay={0} placement="right" style={{ marginRight: 20 }}>
              <SavingsIcon />
            </Tooltip>

            <Slider
              aria-label="Price"
              value={price}
              onChangeCommitted={() => setUpdate((val) => !val)}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleChange}
              min={0}
              color="primary"
            />
          </Grid>
        </Grid>

        <Table
          columns={columns}
          isToolbarVisible={true}
          title={t("Wishlist")}
          data={filteredData}
          hiddenColumns={{ id: windowSize.width > 600 }}
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
