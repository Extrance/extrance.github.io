import { Box, Stack, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import AvengerTable from "../common/table/AvengerTable";
import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { useMemo } from "react";

import SearchLogo from "../UI/Buttons/SearchLogo";
import ClearLogo from "../UI/Buttons/ClearLogo";
import SearchButton from "../UI/Buttons/SearchButton";
import collection from "../../db/collection.json";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useWindowSize } from "../../store/ResizeProvider";

const Home = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState(
    collection.data.filter((item) => item.status === "OWNED")
  );
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const newData = collection.data.filter(
        (item) =>
          item.status === "OWNED" && item.id.includes(num) && item.name.includes(name)
      );
      console.log(newData);
      setFilteredData(newData);
    };
    fetchData();
  }, [update]);

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
        cell: ({ row }) => (
          <div diplay="block">
            <div>{row.original.brand}</div>
            <div style={{ fontSize: 10 }}>{row.original.subBrand}</div>
          </div>
        ),
      },
      {
        header: t("name"),
        accessorKey: "name",
        size: "small",
      },
    ];
  }, [update]);

  return (
    <Box>
      <BoxStyle>
        <Grid container spacing={1}>
          {windowSize.width > 600 && (
            <Grid>
              <TextField
                placeholder="Numero set"
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
              placeholder="Nome"
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
          warning="noProcessFound"
          isPaginated={true}
          rowsperpageslist={[10, 50, 100]}
        />
      </BoxStyle>
    </Box>
  );
};

export default Home;

const BoxStyle = styled(Box)(() => ({
  marginTop: "20px",
  paddingLeft: "25px",
  paddingRight: "25px",
}));
