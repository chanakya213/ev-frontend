import styled from "styled-components";
import { COLORS } from "../../../../theme/colors";
import { FONT_SIZES } from "../../../../theme/fontSizes";
import { FONT_WEIGHTS } from "../../../../theme/fontWeights";

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin-bottom: 20px;
  position: relative;
  .sidebarLeftIcon {
    position: absolute;
    right: 10px;
    top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background: ${COLORS.grey05};
    }
  }
`;
export const TrainingTitle = styled.div`
  padding: 0px 25px 40px 25px;
  font-weight: 600;
  span {
    font-size: 0.7rem;
    font-weight: 300;
  }
`;
export const SidebarContentBox = styled.div``;

export const SidebarContentUpper = styled.div`
  height: calc(85vh - 100px);
  overflow-y: auto;
  position: relative;
`;

export const SidebarContentBottom = styled.div`
  height: 15.3vh;
  padding: 18px;
  /* overflow-y: auto; */
  position: relative;
`;
export const SidebarContentBottomInnerBox = styled.div``;

export const SidebarComponentBox = styled.div`
  width: 220px;
  height: 100vh;
  background: ${COLORS.white};
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  ${(props) =>
    props.theme.mode === "dark" &&
    ` 
  `};
`;

export const ListDataBox = styled.div`
  font-size: ${FONT_SIZES.BODY_MEDIUM_1};
  color: ${COLORS.grey01};
  display: block;
  text-decoration: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 6px 10px;
  .listDataLeftSide {
    display: flex;
    align-items: center;
  }
  border-radius: 1.2rem;
  overflow: hidden;
  font-weight: ${FONT_WEIGHTS[600]};
  &:hover {
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
    .sidebarListIcon {
      path[stroke] {
        stroke: ${COLORS.white};
      }
    }
  }
  .listDataLeftSideUpdownArrow {
    animation: slideup 0.5s linear;
    transform: rotate(180deg);
  }
  .sidebarListIcon {
    path[stroke] {
      stroke: ${COLORS.primaryGreen};
    }
  }
  @keyframes slideup {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export const ListBox = styled.div`
  margin: 0.5rem 1rem;
  a {
    color: ${COLORS.blue};
    display: block;
    text-decoration: unset;
  }
  .sidebarListIcon {
    margin-right: 1.2rem;
  }
  .sideBaractive {
    width: 100%;
    background: ${COLORS.primaryGreen};
    font-weight: ${FONT_WEIGHTS[600]};
    /* border:2px solid #d1f0cb ; */
    color: ${COLORS.primaryGreen};
    border-radius: 1.2rem;
    position: relative;
    .listDataLeftSide {
      color: ${COLORS.white};
    }
    .sidebarListIcon {
      /* fill: ${COLORS.white}; */
      path[stroke] {
        stroke: ${COLORS.white};
      }
    }
  }
`;

export const SidebarProfileContentBox = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    .hoverProfile {
      display: flex;
    }
  }
  .sidebarProfileImg {
    width: 36px;
    height: 36px;
    background: ${COLORS.grey03};
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    img {
      width: 36px;
      height: 36px;
    }
  }

  .sidebarProfileTitle {
    font-size: ${FONT_SIZES.BODY_SMALL_2};
    color: ${COLORS.grey01};
  }
  .sidebarProfileUser {
    font-size: ${FONT_SIZES.BODY_EXTRA_SMALL_1};
    color: ${COLORS.grey01};
    &:hover {
      color: ${COLORS.darkBlue};
      cursor: pointer;
      width: fit-content;
    }
  }
`;

export const HoverProfileCard = styled.div`
  &::before {
    content: "";
    position: absolute;
    background-color: ${COLORS.white};
    width: 1.2rem;
    height: 1.2rem;
    top: -0.2rem;
    right: 0.6rem;
    transform: rotate(45deg);
  }
  background: ${COLORS.white};
  border-radius: 5px;
  position: absolute;
  width: 280px;
  padding: 6px;
  padding-top: 0rem;
  right: 0.5rem;
  top: 2.8rem;
  box-shadow: -6px 0px 28px rgba(98, 87, 116, 0.03),
    26px 32px 24px rgba(98, 87, 116, 0.08);
  display: flex;
  display: none;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ProfileOptionCard = styled.div`
  font-size: ${FONT_SIZES.BODY_MEDIUM_1};
  border-radius: 10px;
  padding: 5px 1rem;
  display: flex;
  gap: 10px;
  &:hover {
    background: ${COLORS.primaryGreen};
    .profileOptionIcon {
      path[stroke] {
        stroke: ${COLORS.white};
      }
    }
    color: ${COLORS.white};
  }
`;

export const UserDetailsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  flex-direction: column;
  .userName {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.8rem;
  }
  .role {
    font-size: 0.9rem;
    font-weight: 300;
    margin-top: 0.3rem;
  }
  .sidebarProfileImgDetails {
    width: 80px;
    height: 80px;
    background: ${COLORS.grey03};
    border-radius: 50px;
    margin-right: 10px;
    overflow: hidden;
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
