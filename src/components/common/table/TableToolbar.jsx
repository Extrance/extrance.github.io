import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import GlobalFilter from "./GlobalFilter";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const TableToolbar = (props) => {
  const {
    numSelected,
    deleteUserHandler,
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
    showGlobalFilter,
    title,
    componentAction,
  } = props;
  return (
    <Toolbar disableGutters>
      <Grid container direction="row" alignItems="center">
        <Grid>
          <TypographyStyle variant="h6" id={title} component="div">
            {title}
          </TypographyStyle>
        </Grid>
        <Grid>{componentAction && componentAction}</Grid>
      </Grid>

      {numSelected > 0 && (
        <TypographyStyle color="inherit" variant="subtitle1">
          {numSelected} selected
        </TypographyStyle>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteUserHandler}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        showGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        )
      )}
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  title: PropTypes.string,
};

export default TableToolbar;

const TypographyStyle = styled(Typography)(() => ({
  flex: "1 1 100%",
}));
