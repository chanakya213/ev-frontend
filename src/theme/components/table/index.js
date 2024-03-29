import React from "react";
import {
  TableBox,
  TableHeading,
  TableData,
  TablePaginationBox,
} from "./tableStyled.js";
import { get } from "lodash";
import { Pagination } from "../pagination";

export const Table = ({ ...props }) => {
  const columns = props?.columns || [];
  const row = props?.data || [];
  return (
    <div>
      <TableBox>
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              {Array.isArray(columns) &&
                columns.length > 0 &&
                columns.map((data, index) => {
                  return (
                    <TableHeading
                      key={`table-head-cell-${index}`}
                      style={{ width: data.width }}
                    >
                      <div style={{ fontSize: "0.9rem", color: "#615E5E" }}>{data?.title}</div>
                    </TableHeading>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(row) &&
              row.length > 0 &&
              row.map((rowData, index) => {
                return (
                  <tr key={index}>
                    {Array.isArray(columns) &&
                      columns.length > 0 &&
                      columns.map((colData, index) => {
                        const value = get(rowData, colData.key);
                        return (
                          <TableData key={`table-body-cell-${index}`}>
                            {colData.render
                              ? colData.render(colData, rowData)
                              : value}
                          </TableData>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </TableBox>
      {props?.totalItems && props.totalItems.length > 10 && (
        <TablePaginationBox>
          <Pagination
            totalItems={props?.totalItems}
            pageNo={props?.pageNo}
            totalPages={props?.totalPages}
            onPageChange={(data) => props?.onPageChange && props?.onPageChange(data)}
          />
        </TablePaginationBox>
      )}
    </div>
  );
};
