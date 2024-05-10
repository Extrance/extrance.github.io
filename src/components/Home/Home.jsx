import { Box, Button, Stack, TextField } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../store/ResizeProvider";
import { useAlert } from "../../store/AlertProvider";

import styled from "@emotion/styled";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import AvengerTable from "../common/table/AvengerTable";
import SearchLogo from "../UI/Buttons/SearchLogo";
import ClearLogo from "../UI/Buttons/ClearLogo";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const alert = useAlert();
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Extrance/data/main/collection.json"
      )
        .then((res) => res.json())
        .then((out) => setData(out.data))
        .catch(() => alert.showErrorAlert(t("errorRetrieve")))
        .finally(() => setUpdate(!update));
    };
    document.title = "Ball's Collection";
    fetchData();
  }, []);

  useEffect(() => {
    if (update !== null) filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

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

  const navigate = useNavigate();

  const columns = useMemo(() => {
    return [
      {
        header: t("id"),
        accessorKey: "id",
        size: "small",
        cell: ({ row }) => (
          <Button variant="text" onClick={() => navigate(`${row.original.id}`)}>
            {row.original.id}
          </Button>
        ),
      },
      {
        header: t("brand"),
        accessorKey: "brand",
        size: "small",
        cell: ({ row }) => (
          <Stack display="flex" justifyContent="center" minHeight="33px"><div>{row.original.brand}</div>{row.original?.subBrand && <div style={{ fontSize: 10 }}>{row.original.subBrand}</div>}</Stack>
        ),
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  return (
    <BoxStyle>
      <Grid container spacing={1}>
        {windowSize.width > 600 && (
          <Grid>
            <TextField
              placeholder={t("setNumber")}
              variant="standard"
              value={num}
              style={{ width: 150 }}
              onChange={(e) => setNum(e.target.value)}
              size="small"
            />
          </Grid>
        )}
        <Grid>
          <TextField
            placeholder={t("name")}
            variant="standard"
            value={name}
            style={{ width: 150 }}
            onChange={(e) => setName(e.target.value)}
            size="small"
          />
        </Grid>
        <Grid>
          <Stack direction="row">
            <SearchLogo
              disabled={false}
              tooltipLabel={t("search")}
              props={{
                onClick: () => setUpdate(!update),
              }}
            />
            <ClearLogo
              disabled={false}
              tooltipLabel={t("clear")}
              props={{
                onClick: () => {
                  setNum("");
                  setName("");
                  setUpdate(!update);
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
      <AvengerTable
        isToolbarVisible={true}
        title={t("OwnedSets")}
        columns={columns}
        data={filteredData}
        size="small"
        warning="noSetFound"
        isPaginated={true}
        rowsperpageslist={[10, 50, 100]}
      />
    </BoxStyle>
  );
};

export default Home;

const BoxStyle = styled(Box)(() => ({
  marginTop: "20px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
