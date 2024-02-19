import styled from "styled-components";
import { COLORS } from "../../../theme/colors";

export const MainComponentBox = styled.div`
  display: flex;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const ContentBox = styled.div`
  width: 100%;
`;

export const ContentChildrenBox = styled.div`
  margin-top: 50px;
  height: 100vh;
  background-color: ${COLORS.grey05};
  overflow-y: scroll;
`;
