import styled from "styled-components";
import { COLORS } from "../../../../theme/colors";

export const FooterBox = styled.div`
  padding: 8px;
  text-align: center;
  align-items: center;
  background: ${COLORS.primaryGreen};
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 15;
`;

export const ContentBox = styled.p`
  color: ${COLORS.white};
  font-weight: 600;
font-size: 0.9rem;
`;
