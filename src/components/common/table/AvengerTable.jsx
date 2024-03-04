import {
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import TableToolbar from "./TableToolbar";
import TablePaginationActions from "./TablePaginationActions";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import { isEmpty } from "../../../util/utilFunction";
import styled from "styled-components";

/**
 * AvengerTable Table Component
 *
 * This component use react-table hook
 *
 * @author Nikolas Sturaro
 */

const AvengerTable = ({
  columns,
  data,
  title,
  rowsperpageslist,
  isPaginated,
  hiddenColumns,
  size,
  componentAction,
  isToolbarVisible,
  hideHeader,
  hideWarning,
  warning,
  getRowStyles,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [lastPage, setLastPage] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const table = useReactTable({
    data,
    columns,
    autoResetPageIndex: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility: hiddenColumns,
      expanded,
    },
    initialState: {
      pagination: {
        pageSize: !isEmpty(rowsperpageslist) ? rowsperpageslist[0] : 10,
      },
    },
    getExpandedRowModel: getExpandedRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRow,
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  useEffect(() => {
    if (
      pageIndex >= Math.ceil(table.getExpandedRowModel().rows.length / pageSize)
    ) {
      table.setPageIndex(0);
    } else {
      setLastPage(false);
    }
  }, [data, table.getExpandedRowModel().rows.length]);

  const handleChangePage = (event, newPage) => {
    table.setPageIndex(newPage);
    if (
      newPage >=
      Math.ceil(table.getExpandedRowModel().rows.length / pageSize) - 2
    ) {
      setLastPage(true);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    const size = event.target.value ? Number(event.target.value) : 10;
    table.setPageSize(size);
  };

  // Render the UI for your table
  return (
    <TableContainer sx={{ flex: "1 1 100%" }}>
      {isToolbarVisible && (
        <TableToolbar title={title} componentAction={componentAction} />
      )}
      {table.getRowModel().rows.length > 0 && (
        <TableContainer elevation={3}>
          <Table size={size}>
            {!hideHeader && (
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableCell
                        align="center"
                        key={header.id}
                        colSpan={header.colSpan}
                        sx={{
                          width:
                            header.getSize() !== 150
                              ? `${header.getSize().toString()}%`
                              : undefined,
                        }}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
            )}
            <TableBody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:hover": {
                        "& .MuiTableCell-root": {
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? `rgba(255,255,255,${(row.depth + 3) * 0.04})`
                              : `rgba(0,0,0,${(row.depth + 3) * 0.04})`,
                        },
                      },
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          align="center"
                          key={cell.id}
                          sx={{
                            width:
                              cell.column.getSize() !== 150
                                ? `${cell.column.getSize().toString()}%`
                                : undefined,
                            paddingLeft:
                              row.depth > 0
                                ? `${row.depth * 1.5}rem`
                                : undefined,
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? `rgba(255,255,255,${row.depth * 0.04})`
                                : `rgba(0,0,0,${row.depth * 0.04})`,
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {isPaginated && (
            <TablePagination
              rowsPerPageOptions={rowsperpageslist}
              component="div"
              count={table.getExpandedRowModel().rows.length}
              rowsPerPage={pageSize}
              page={pageIndex}
              style={{ display: "flex", overflow: "auto" }}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          )}
        </TableContainer>
      )}
      {table.getRowModel().rows.length === 0 && !hideWarning && (
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              display="flex"
              alignItems="center"
            >
              <InfoIcon style={{ marginRight: 5 }} />
              <>{t("attention")}</>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {t(warning)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </TableContainer>
  );
};

AvengerTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  isToolbar: PropTypes.bool,
};

export default AvengerTable;
