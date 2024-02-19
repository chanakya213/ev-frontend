import React, { useEffect } from "react";
import {
   VehicleDataBox,
   VehicleDataLefitBox,
   VehicleDataRightBox,
   ChartsBox,
   ChartContainer,
   ContentContainerBox,
   PredictedBox,
   RoundedPara,
   PredictedContent,
   ChartHeading,
} from "./vehicle.styles";

import {
   Chart as ChartJS,
   CategoryScale, //x axis
   LinearScale, // y axis
   PointElement,
   LineElement,
   BarElement,
   Title,
   Tooltip,
   Legend,
   defaults,
   Filler,
} from "chart.js";
import {
   VehicleDetailsWithImage,
   VehicleDetailsDetailsBox,
   VehicleDetailsStripedBox,
} from "./components";
import HalfDounut from "./Charts/halfDoughnet";
import LineChart from "./Charts/LineChart";
import { RulData, RulLabel, CapacityLabel } from "./staticData";
import { GET_SINGLE_VEHICLE_PREDICTIVE_DATA } from "../../services";
import { lineChartOptions } from "./ChartProps/chartProps";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   BarElement,
   Filler,
   Title,
   Tooltip,
   Legend
);
// Default styling for charts
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "red";
defaults.plugins.title.font = { size: " 24px", weight: "bold" };

const arrayData1 = [12000, 4000, 4000];
const arrayData2 = [60, 20, 20];

const actualCapacity = {
   data: [1.2, 1.4, 1.6, 1.5, 1.3, 1.4, 1.5, 1.7, 1.8],
   color: "#3257a9",
   order: 1,
   legendTitle: "Actual Capacity",
};
const predictedCapacity = {
   data: [1.3, 1.5, 1.7, 1.6, 1.4, 1.5, 1.6, 1.8, 1.2],
   color: "#36a793",
   order: 2,
   legendTitle: "Predicted Capacity",
};

const Capacity = [actualCapacity, predictedCapacity];

const PredictiveIntelligence = ({ vehicleData }) => {

   useEffect(() => {
      if (vehicleData.dvid) {
         GET_SINGLE_VEHICLE_PREDICTIVE_DATA(vehicleData.dvid).then(res => {
            console.log(res.data);
         }).catch(err => {
            console.log(err)
         })
      }
   }, [vehicleData])

   return (
      <>
         <VehicleDataBox>
            <VehicleDataLefitBox>
               <VehicleDetailsWithImage name={"KORO"} />
               <VehicleDetailsDetailsBox vehicleData={vehicleData} />
            </VehicleDataLefitBox>

            <VehicleDataRightBox>
               <div className="detailsGridContainer">
                  <VehicleDetailsStripedBox
                     title={"SOC"}
                     value={vehicleData?.monitor?.soc + "%"}
                  />
                  <VehicleDetailsStripedBox
                     title={"SOH"}
                     value={vehicleData?.monitor?.soh + "%"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Pack Voltage"}
                     value={"943 V"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Energy In"}
                     value={vehicleData?.energyIn}
                  />
                  <VehicleDetailsStripedBox
                     title={"Energy Out"}
                     value={vehicleData?.energyOut}
                  />
                  <VehicleDetailsStripedBox
                     title={"Kw/100 Km"}
                     value={"3.1 Kw"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Avg Range"}
                     value={"132 Km"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Vehicle Status"}
                     value={"ON"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Avg Speed"}
                     value={"23 Kmph"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Total Distance"}
                     value={"12345 Km"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Total Capacity"}
                     value={"4 KW"}
                  />
                  <VehicleDetailsStripedBox
                     title={"Avail Capacity"}
                     value={"2.8 KW"}
                  />
               </div>
            </VehicleDataRightBox>
         </VehicleDataBox>

         <ChartsBox>
            <ContentContainerBox>
               <ChartContainer
                  padding="2rem 1.5rem"
                  displayType="block"
                  flexShorthand="1 1 18.5%"
                  height="350px"
               >
                  <ChartHeading>RUL Predicted</ChartHeading>
                  <div style={{ height: "250px" }}>
                     <LineChart
                        chartOptions={{
                           ...lineChartOptions,
                           labels: RulLabel,
                           graphData: [
                              {
                                 data: RulData,
                                 lineColor: "#3257a9",
                                 isFilled: false,
                                 order: 1,
                                 dataLegendTitle: "19",
                              },
                           ],
                           isGridDotted: true,
                           isLegendVisible: true,
                           isXAxisGridVisible: true,
                           isYAxisGridVisible: true,
                           isYAxisVisible: false,
                           xAxisTitleVisible: true,
                           yAxisTitleVisible: true,
                           xAxisTitleText: "Month & Year",
                           yAxisTitleText: "Battery ID",
                           legendPos: "left",
                        }}
                     />
                  </div>
               </ChartContainer>
               <ChartContainer
                  padding="2rem 1.5rem"
                  displayType="block"
                  height="350px"
               >
                  <ChartHeading>Actual VS Predicted Capacity</ChartHeading>
                  <div style={{ height: "250px" }}>
                     <LineChart
                        chartOptions={{
                           ...lineChartOptions,
                           labels: CapacityLabel,
                           graphData: Capacity.map((data) => ({
                              data: data.data,
                              lineColor: data.color,
                              isFilled: false,
                              order: data.order,
                              dataLegendTitle: data.legendTitle,
                           })),
                           isGridDotted: true,
                           isLegendVisible: true,
                           isXAxisGridVisible: true,
                           isYAxisGridVisible: true,
                           xAxisTitleVisible: true,
                           yAxisTitleVisible: true,
                           xAxisTitleText: "Cycle",
                           yAxisTitleText: "Prediction vs Capacity",
                           legendPos: "top",
                        }}
                     />
                  </div>
               </ChartContainer>
            </ContentContainerBox>

            <ContentContainerBox>
               <ChartContainer padding="0rem 1.5rem" height="300px">
                  <HalfDounut
                     inputData={arrayData1}
                     needleData="15000"
                     title="Vehicle Residual Value"
                  />
               </ChartContainer>
               <ChartContainer height="300px" padding="0rem 1.5rem">
                  <HalfDounut
                     inputData={arrayData2}
                     needleData="65"
                     title="Driver Score"
                  />
               </ChartContainer>
               <ChartContainer padding="0" displayType="block" height="300px">
                  <PredictedBox>
                     <RoundedPara>Predicted Next Service</RoundedPara>
                     <PredictedContent>DD/MM/YYY</PredictedContent>
                  </PredictedBox>
               </ChartContainer>
               <ChartContainer padding="0" displayType="block" height="300px">
                  <PredictedBox>
                     <RoundedPara>Predicted RUL</RoundedPara>
                     <PredictedContent>1234</PredictedContent>
                  </PredictedBox>
               </ChartContainer>
            </ContentContainerBox>
         </ChartsBox>
      </>
   );
};

export default PredictiveIntelligence;
