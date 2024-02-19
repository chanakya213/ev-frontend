import styled from "styled-components";
import { COLORS } from "../../colors";

export const TableBox = styled.div`
  table {
    width: 100%;
    border: 1px solid #DDDDDD;
    border-radius: 1rem;
    overflow: hidden;
  }
`;

export const TableHeading = styled.th`
  background: ${COLORS.grey04};
  padding: 1.5rem;
  text-align: center;
  color: ${COLORS.black};
  &:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  &:last-child {
    border-radius: 0px 10px 10px 0px;
  }
`;

export const TableData = styled.td`
  font-size:0.9rem;
  padding: 10px;
  text-align: center;
  background-color: ${COLORS.white};
  border-bottom: 1px solid #DDDDDD;
`;

export const TablePaginationBox = styled.td`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`;
