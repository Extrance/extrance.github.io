import { Box as MuiBox, Button, Chip, Stack, TextField } from "@mui/material";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useWindowSize } from "../../store/ResizeProvider";
import { useAlert } from "../../store/AlertProvider";
import { useNavigate } from "react-router-dom";
import { removeDuplicates } from "../../util/utilFunction";
import { Table } from "../common";
import { useForm, Controller } from "react-hook-form";
import { useRecoilState } from "recoil";
import { atomCollection } from "../../atoms/atomsCollection";
import { t } from "i18next";

import styled from "@emotion/styled";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import SearchLogo from "../UI/Buttons/SearchLogo";
import ClearLogo from "../UI/Buttons/ClearLogo";

const Collection = () => {
  const windowSize = useWindowSize();
  const alert = useAlert();
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState([t("all")]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useRecoilState(atomCollection);
  const [loading, setLoading] = useState(true);

  const defaultValues = useMemo(() => {
    return {
      num: "",
      name: "",
      brand: "all",
    };
  }, []);

  const { control, handleSubmit, getValues, setValue, reset } = useForm({
    defaultValues: filters,
  });

  useEffect(() => {
    document.title = t("applicationName") + " - " + t("Home");
    fetchData();
    return () => {
      setFilters(getValues());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = useCallback(() => {
    fetch(
      "https://raw.githubusercontent.com/Extrance/data/main/collection.json"
    )
      .then((res) => res.json())
      .then((out) => {
        setData(out.data);
        setBrands(
          ["all"].concat(
            removeDuplicates(
              out.data.map((item) => {
                return item.brand;
              })
            )
          )
        );
        filter(out.data);
      })
      .catch(() => alert.showErrorAlert(t("errorRetrieve")));
  }, []);

  const filter = (items = data) => {
    setFilteredData(
      items.filter(
        (item) =>
          item.id.includes(getValues("num")) &&
          item.name.includes(getValues("name")) &&
          (getValues("brand") === "all" ||
            item.brand.includes(getValues("brand")))
      )
    );
    if (loading) setLoading(false);
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
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  const onSubmit = useCallback(() => {
    filter(data);
  }, [data]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          {windowSize.width > 600 && (
            <Grid>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder={t("setNumber")}
                    variant="standard"
                    style={{ width: 150 }}
                    size="small"
                  />
                )}
                name="num"
                control={control}
              />
            </Grid>
          )}
          <Grid>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder={t("name")}
                  variant="standard"
                  style={{ width: 150 }}
                  size="small"
                />
              )}
              name="name"
              control={control}
            />
          </Grid>
          <Grid>
            <Stack direction="row">
              <ClearLogo
                tooltipLabel={t("clear")}
                props={{
                  onClick: () => reset(defaultValues),
                }}
              />
              <SearchLogo tooltipLabel={t("search")} />
            </Stack>
          </Grid>
        </Grid>
        {windowSize.width > 600 && (
          <Grid container spacing={0} style={{ gap: "3px" }}>
            {brands.map((el, index) => {
              return (
                <Chip
                  key={index}
                  style={{
                    fontWeight: "bold",
                  }}
                  label={t(el)}
                  color="primary"
                  value={el}
                  variant={el === getValues("brand") ? "contained" : "outlined"}
                  onClick={() => {
                    setValue("brand", el);
                    filter();
                  }}
                />
              );
            })}
          </Grid>
        )}
      </form>
      <Table
        isToolbarVisible={true}
        title={t("OwnedSets")}
        columns={columns}
        data={filteredData}
        warning="noSetFound"
        isPaginated={true}
        loading={loading}
        rowsperpageslist={[10, 50, 100]}
      />
    </Box>
  );
};

export default Collection;

const Box = styled(MuiBox)(() => ({
  marginTop: "20px",
  padding: "0px 25px 0px 25px",
}));
