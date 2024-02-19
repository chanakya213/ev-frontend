import styled from "styled-components";
import { COLORS } from "../../../../theme/colors";

export const HeaderBox = styled.div`
  min-height: 50px;
  background: ${COLORS.primaryGreen};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 15px;
  border-bottom: 2px solid ${COLORS.grey03};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100vw;
  h5 {
    font-size: 0.9rem;
  }
`;

export const LeftHeaderBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-around;
  img {
    margin-right: 8px;
    height: 20px;
  }
  .toggler {
    cursor: pointer;
  }
`;

export const RightHeaderBox = styled.div`
  display: flex;
  position: relative;
  margin-right: 2rem;
  .notification-img {
    &::after {
      content: "";
      background: ${COLORS.blue};
      border-radius: 100%;
      padding: 5px;
      position: absolute;
      left: 1.7rem;
    }
  }
`;
