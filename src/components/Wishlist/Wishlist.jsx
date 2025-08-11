import { Box, Chip, Slider, Stack, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useMemo } from "react";
import { useAlert } from "../../store/AlertProvider";
import { useWindowSize } from "../../store/ResizeProvider";
import { Table } from "../common";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";
import LinkLogo from "../UI/Buttons/LinkLogo";
import SavingsIcon from "@mui/icons-material/Savings";

const categories = ["all", "LEGO", "Puzzles", "Videogames", "Comics"];

const Wishlist = () => {
  const { t } = useTranslation();
  const alert = useAlert();
  const windowSize = useWindowSize();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [update, setUpdate] = useState(null);
  const [price, setPrice] = useState(150);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = t("applicationName") + " - Wishlist";
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Extrance/data/main/wishlist.json"
      )
        .then((res) => res.json())
        .then((out) => setData(out.data))
        .catch(() => alert.showErrorAlert(t("errorRetrieve")))
        .finally(() => setUpdate((val) => !val));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (update !== null) filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const filter = () => {
    setFilteredData(
      data.filter(
        (item) =>
          item.price <= price &&
          (category === "all" || item.category === category)
      )
    );
    if (loading) setLoading(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              marginBottom: "10px",
            }}
          >
            <Tooltip
              disableFocusListener
              title={t("price")}
              enterTouchDelay={0}
              placement="right"
              style={{ marginRight: 20 }}
            >
              <SavingsIcon />
            </Tooltip>

            <Slider
              aria-label="Price"
              value={price}
              onChangeCommitted={() => setUpdate((val) => !val)}
              valueLabelDisplay="auto"
              max={450}
              onChange={handleChange}
              min={25}
              color="primary"
            />
          </Grid>

          <Grid container spacing={0} style={{ gap: "3px" }}>
            {categories.map((el, index) => {
              return (
                <Grid>
                  <Chip
                    key={index}
                    style={el === category ? {
                      fontWeight: "bold",
                    } : {}}
                    color="primary"
                    label={t(el)}
                    value={el}
                    variant={el === category ? "contained" : "outlined"}
                    onClick={() => {
                      setCategory(el);
                      setUpdate((val) => !val);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Table
          columns={columns}
          isToolbarVisible={true}
          title={t("Wishlist")}
          data={filteredData}
          hiddenColumns={{ id: windowSize.width > 600 }}
          isPaginated={true}
          warning="noEntryFound"
          loading={loading}
          rowsperpageslist={[10, 50, 100]}
        />
      </BoxStyle>
    </Box>
  );
};

export default Wishlist;

const BoxStyle = styled(Box)(() => ({
  padding: "0px 25px",
}));
