import React, { useEffect, useState } from "react";
import logo from '../../assets/images/mapDashBoard.png';
import { connect } from "react-redux";
import {
  DashboardBox,
  mainComponentStyle,
  flexColumnCenterStyle,
  ContainerBox,
  LeftContainer,
  RightContainer,
  AlarmHeading,
  ChartContentBox,
  HeadingBox,
  HeadingH2,
  GridContainer,
  GridItem,
} from "./dashboard.styled";
import {
  HeadingTag,
  DataInfoBox,
  DataColorStipBox,
  DistanceContainer,
} from "./components";
import {
  evPartsLabels, consumptionData, alarmTypeLabels, barColors, DefectedVehicles, StateOfVehcile, labels, runtimeData
} from './StaticData.js'
import BarChart from "../vehicle-details/Charts/BarChart";
import { GET_DASHBOARD_STATISTICS } from "../../services/dashbiard.api.js";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const getDashboardStatistics = () => {
      GET_DASHBOARD_STATISTICS().then(res => {
        setDashboardData(res.data)
      })
    }
    getDashboardStatistics();
  }, [])

  return (
    <DashboardBox>
      <div style={mainComponentStyle}>
        <div style={flexColumnCenterStyle}>
          <HeadingTag title={"All Vehicles - 250011"} />

          {/* vehicle status */}

          <div
            style={{
              display: "flex",
              gap: "1rem",
              maxWidth: "fit-content",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div
              style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
            >
              <DataColorStipBox
                title={"Running"}
                value={dashboardData.runningVehicle}
                backgroundColor="#7EEFA4"
              />
              <DataColorStipBox
                title={"Idel"}
                value={dashboardData.chargingVehicle}
                backgroundColor="#F8B95B"
              />
            </div>
            <div
              style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
            >
              <DataColorStipBox
                title={"Disconnected"}
                value={dashboardData.disconnectedVehicle}
                backgroundColor="#EE5656"
              />
              <DataColorStipBox
                title={"In Repair"}
                value={dashboardData.parkedVehicle}
                backgroundColor="#719CF0"
              />
            </div>
          </div>
        </div>

        {/* total distance */}

        <DistanceContainer value={dashboardData.DailyConsumotion + ' Km'} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          <DataInfoBox title={"Dealer Count"} value={333} />
          <DataInfoBox title={"Average Vehicle/Dealer"} value={333} />
          <DataInfoBox title={"CO2 Saved"} value={333} />
          <DataInfoBox title={"Average Range"} value={333} />
          <DataInfoBox title={"Total Power Consumed"} value={333} />
          <DataInfoBox title={"Average Battery Life"} value={333} />
        </div>
      </div>

      <ContainerBox>
        <LeftContainer padding='2.5rem 0.5rem 0.8rem 0.5rem' bg='white' >
          <AlarmHeading>Service Alarms</AlarmHeading>
          <ChartContentBox >
            <BarChart
              labels={evPartsLabels}
              graphData={consumptionData}
              barColors={barColors.slice(0, 6)}
              isYVisible={true}
              isXVisible={false}
              isValueOnBarVisible={true}
              indexAxis={"y"}
              barthickness="35"
            />
          </ChartContentBox>
          <ChartContentBox height='300px'>
            <BarChart
              labels={alarmTypeLabels}
              graphData={consumptionData}
              barColors={barColors.slice(-4)}
              isYVisible={true}
              isXVisible={false}
              isValueOnBarVisible={true}
              indexAxis={"y"}
              barthickness="30"
            />
          </ChartContentBox>
        </LeftContainer >
        <RightContainer>
          <HeadingBox>
            <HeadingH2>
              High Criticality Alarms
            </HeadingH2>
          </HeadingBox>
          <GridContainer>
            {DefectedVehicles.map(cell => (
              <GridItem key={cell.id}>
                {cell.content}
              </GridItem>
            ))}
          </GridContainer>
        </RightContainer>
      </ContainerBox >

      <ContainerBox>
        <LeftContainer padding='0rem' >
          <ChartContentBox height='250px'>
            <img width="100%" height='100%' src={logo} alt="Map Containing Vechile Location" />
          </ChartContentBox>
        </LeftContainer>
        <RightContainer >

          <GridContainer columns='2' gap='0.765rem'>
            {StateOfVehcile.map(cell => (
              <GridItem fontSize='0.7rem' paddingVertical='0.745rem' key={cell.id}>
                {cell.content}
              </GridItem>
            ))}
          </GridContainer>
        </RightContainer>
      </ContainerBox >

      <ContainerBox>
        <LeftContainer padding='2.5rem 0.2rem 0.8rem 0.2rem' bg='white' >
          <AlarmHeading>Daily Runtime (Hrs)</AlarmHeading>
          <ChartContentBox height='450px'>
            <BarChart
              labels={labels}
              graphData={runtimeData}
              barColors={barColors}
              isYVisible={false}
              isXVisible={true}
              isValueOnBarVisible={true}
              barthickness="28"
            />
          </ChartContentBox>
        </LeftContainer>
        <RightContainer padding='2.5rem 0.2rem 0.8rem 0.2rem' bg='white' >
          <AlarmHeading>Daily Consumption (Kw)</AlarmHeading>
          <ChartContentBox height='450px'>
            <BarChart
              labels={labels}
              graphData={consumptionData}
              barColors={barColors}
              isYVisible={false}
              isXVisible={true}
              isValueOnBarVisible={true}
              barthickness="28"
            />
          </ChartContentBox>
        </RightContainer>
      </ContainerBox >
    </DashboardBox >


  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {})(Dashboard);
