import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { FONT_WEIGHTS } from "../../theme/fontWeights";

export const VehicleDetailsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
`;

export const VehicleDetailsNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const VehicleDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

`;
export const VehicleDataLefitBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 1rem;
`;

export const VehicleDataRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  .detailsGridContainer{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 1rem;
    column-gap: 0.4rem;
    width: 100%;
    margin-inline: auto;
  }
  .trackingGridContainer{
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 0.5rem;
    column-gap: 0.4rem;
    width: 100%;
    margin-inline: auto;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0rem;
`;

export const NavBarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  padding: 0.7rem;
  width: 260px;
  background-color: ${COLORS.grey03};
  color: ${COLORS.black};
  font-size: 0.9rem;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `  background-color: ${COLORS.buttonPrimary};
    color: ${COLORS.white};
    font-weight: bold;`};
`;

export const ChartsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
`;

export const ContentContainerBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const ChartContainer = styled.div`
  background-color: ${COLORS.white};
     ${(props) =>
    ` flex:${props.flexShorthand || '1 1 0%'};`};
     ${(props) =>
    ` display:${props.displayType || 'flex'};`};
  justify-content: center;
  align-items: flex-start;
  width:auto;
  border-radius: 1rem;
   ${(props) =>
    `padding:${props.padding || '2rem 1rem'};`};
  gap: 2rem;
  box-sizing: border-box;
  box-shadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
   ${(props) =>
    `min-height:${props.height || '650px'};
`};
 
`;



export const SeparateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2rem;

`;

export const GridItem = styled.div`
box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size :0.7rem;
  font-weight: ${FONT_WEIGHTS[600]};
  padding: 1.685rem 1.5rem;
  background-color: ${COLORS.white};
  color:  ${COLORS.grey01};
  cursor: pointer; 
  border-radius: 10px; 
  &:hover {
    background-color: ${COLORS.buttonPrimary};
    color: ${COLORS.white};
  }
  `;

export const AlarmListBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 2rem;


 
`;
export const LineChartContainer = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: column;
gap : 1.045rem
`

export const Chart = styled.div`
box-sizing: border-box;
border-radius: 12px;
background-color : ${COLORS.white};
padding : 0rem 3rem;
min-height: 11.25rem;

`
export const PredictedBox = styled.div`
 display: flex;
 flex-direction : column;
`
export const RoundedPara = styled.p`
 font-weight: 500;
 display: flex ;
 justify-content: center;
 align-items: center;
 background-color: #80C9FF;
 text-align: center;
 color : white;
 border-top-left-radius : 1rem;
 border-top-right-radius : 1rem;
 min-height : 75px;

`
export const PredictedContent = styled.p`
 display: flex ;
 justify-content: center;
 align-items: center;
 text-align: center;
 min-height: 215px;
 font-size: 32px;
 font-weight: 500;
 color : #615E5E;
`
export const ChartHeading = styled.p`
color: #615E5E;
font-size : 1rem;
 font-weight: 500;
 margin-left: 1rem;
 margin-bottom: 2rem;
`;

export const containerTableStyling = { marginTop: "2rem", backgroundColor: 'white', width: "fit-content", padding: "2rem", borderRadius: "1rem" }