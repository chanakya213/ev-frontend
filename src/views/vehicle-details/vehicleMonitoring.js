import React, { useEffect, useState } from "react";
import {
    VehicleDataBox,
    VehicleDataLefitBox,
    VehicleDataRightBox,
    ChartsBox,
    ChartContainer,
    ContentContainerBox,
    AlarmListBox,
    SeparateGrid,
    GridItem,
} from "./vehicle.styles";
import { barColors, cellVoltageLabels, cells } from "./staticData";
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
import BarChart from "./Charts/BarChart";
import { HeadingTag } from "../dashboard/components";
import {
    VehicleDetailsWithImage,
    VehicleDetailsDetailsBox,
    VehicleDetailsStripedBox,
    VehicleMultipleDetailsStripedBox,
} from "./components";
import AlarmList from "./components/alarmList";
import mapImg from "../../assets/images/map.png";
import TemperatureChart from "./components/TemperatureChart";
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

const VehicleMonitoring = ({ vehicleData }) => {
    const [temperatureGraph, settemperatureGraph] = useState({});
    const tempValue = ["cellTemp", "pcbTemp", "icTemp"];
    useEffect(() => {
        if (vehicleData) {
            filterTempatatureGraph();
        }
    }, [vehicleData]); //eslint-disable-line

    function filterTempatatureGraph() {
        const finalValues = [];
        const finalLabel = [];
        const finalColors = [];
        if (vehicleData.monitor) {
            tempValue.forEach((cellValue, Pindex) => {
                if (
                    vehicleData.monitor[cellValue] &&
                    vehicleData.monitor[cellValue].length > 0
                ) {
                    vehicleData.monitor[cellValue].forEach((value, index) => {
                        finalValues.push(value);
                        finalLabel.push(
                            cellValue === "cellTemp"
                                ? "CT " + (index + 1)
                                : cellValue === "pcbTemp"
                                ? "PT " + (index + 1)
                                : cellValue === "icTemp"
                                ? "IC " + (index + 1)
                                : ""
                        );
                        finalColors.push(barColors[Pindex]);
                    });
                }
            });
            settemperatureGraph({
                label: finalLabel,
                value: finalValues,
                color: finalColors,
            });
        }
    }

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

            <VehicleDataBox>
                <VehicleDataRightBox
                    style={{
                        flexDirection: "column",
                        borderRadius: "1rem",
                    }}
                >
                    <div className="trackingGridContainer">
                        <VehicleMultipleDetailsStripedBox
                            title={"Current"}
                            value={{
                                packCurrent: vehicleData?.monitor?.packCurrent,
                                maxPackCurrent:
                                    vehicleData?.monitor?.maxPackCurrent,
                                avgPackCurrent:
                                    vehicleData?.monitor?.avgPackCurrent,
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                gap: "0.5rem",
                            }}
                        >
                            <VehicleDetailsStripedBox
                                title={"Avail Capacity"}
                                value={"2.8 KW"}
                            />
                            <VehicleDetailsStripedBox
                                title={"Avail Capacity"}
                                value={"2.8 KW"}
                            />
                            <VehicleDetailsStripedBox
                                title={"Avail Capacity"}
                                value={"2.8 KW"}
                            />
                        </div>
                    </div>
                </VehicleDataRightBox>

                <VehicleDataRightBox
                    style={{
                        backgroundColor: "white",
                        flexDirection: "column",
                        padding: "1.6rem 0rem",
                        borderRadius: "1rem",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                >
                    <img
                        src={mapImg}
                        alt="mapimg"
                        style={{ width: "540px", height: "200px" }}
                    />
                </VehicleDataRightBox>
            </VehicleDataBox>

            <ChartsBox>
                <ContentContainerBox>
                    <ChartContainer>
                        <BarChart
                            labels={cellVoltageLabels}
                            graphData={vehicleData?.monitor?.cellVoltage}
                            title="Cell Voltage"
                            barColors="#FFD494"
                            barthickness="20"
                        />
                    </ChartContainer>
                    <ChartContainer>
                        <BarChart
                            labels={temperatureGraph.label}
                            graphData={temperatureGraph.value}
                            title="Temperature"
                            barColors={temperatureGraph.color}
                            barthickness="35"
                        />
                    </ChartContainer>
                </ContentContainerBox>

                <ContentContainerBox>
                    <AlarmListBox>
                        <HeadingTag title={"Alarm List1"} />
                        <SeparateGrid>
                            {cells.map((cell) => (
                                <GridItem key={cell.id}>
                                    {cell.content}
                                </GridItem>
                            ))}
                        </SeparateGrid>
                    </AlarmListBox>
                    <AlarmList dvid={vehicleData.dvid} />
                </ContentContainerBox>

                <ContentContainerBox>
                    <TemperatureChart dvid={vehicleData.dvid} />
                </ContentContainerBox>
            </ChartsBox>
        </>
    );
};

export default VehicleMonitoring;
