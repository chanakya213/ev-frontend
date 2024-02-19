import styled from "styled-components";
import { COLORS } from "../../theme/colors";


export const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  gap: 2rem;
  .title {
    font-weight: 600;
  }
  p {
    font-size: 1rem;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const mainComponentStyle = {
  display: "flex",
  padding: "1rem",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "nowrap",
  maxWidth: "1320px",
  width: "fit-content",

};

export const flexColumnCenterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ContainerBox = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1.2rem;
  width: 100%;
  max-width: 1080px;

`;
export const LeftContainer = styled.div`
  flex: 1 1 0%;
  padding: ${({ padding }) => padding || '0'};
  background-color: ${({ bg = '' }) => bg};
  border-radius: 1rem;
`;
export const RightContainer = styled.div`
  flex: 1 1 4%;
  border-radius: 1rem;
  padding: ${({ padding }) => padding || '0'};
  background-color: ${({ bg = '' }) => bg};

`;

export const AlarmHeading = styled.h2`
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: #615e5e;
  font-size: 1.5rem;
`;

export const ChartContentBox = styled.div`
  margin: ${({ margin }) => margin || '0'};
  ${(props) =>
    `
    min-height:${props.height || "350px"} ;
    width : ${props.width || ""}
    
    ;
`};
`;

export const HeadingBox = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const HeadingH2 = styled.h2`
  background-color: white;
  padding: 1.2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 100%;
  color: #615e5e;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows || 8}, 1fr);
  gap: ${({ gap = '1rem' }) => gap};
`;

export const GridItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
   font-weight: 600;
  font-size: ${({ fontSize = '0.8rem' }) => fontSize};
  padding: ${({ paddingVertical, paddingHorizontal }) => {
    const verticalPadding = paddingVertical || '1.8rem';
    const horizontalPadding = paddingHorizontal || '0.2rem';
    return `${verticalPadding} ${horizontalPadding}`;
  }};
  background-color: ${COLORS.white};
  color: ${COLORS.grey01};
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${COLORS.buttonPrimary};
    color: ${COLORS.white};
  }
`;