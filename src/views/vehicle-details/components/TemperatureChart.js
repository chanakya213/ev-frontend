import { useEffect, useState } from "react";
import { GET_SINGLE_VEHICLE_TEMPERATURE_LIST } from "../../../services";
import LineChart from "../Charts/LineChart";
import { stateOfBatteryLabel } from "../staticData";
import { ChartContainer } from "../vehicle.styles";
import { lineChartOptions } from "../ChartProps/chartProps";
const COLORSARR = ["blue", "red", "green", "black", "grey"];

function TemperatureChart({ dvid }) {
    const [graphData, setGraphData] = useState([]);
    const [mosfetTemp, setMosfetTemp] = useState([]);

    useEffect(() => {
        const getAlarmData = () => {
            GET_SINGLE_VEHICLE_TEMPERATURE_LIST(dvid)
                .then((res) => {
                    filterTemparatureData(res.data.batteryTempVsStateOfCharge);
                    //setting the mosfetTempVsAmbientTemp values
                    const tempMosfetTemp = {
                        data: [],
                        color: 'blue',
                        isFilled: true,
                        borderThickness: 1
                    }
                    if (Array.isArray(res.data.mosfetTempVsAmbientTemp)) {
                        res.data.mosfetTempVsAmbientTemp.forEach((temp) => {
                            tempMosfetTemp.data.push(temp.fetTemp)
                        })
                        setMosfetTemp([tempMosfetTemp]);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        if (dvid) {
            getAlarmData();
        }
    }, [dvid]);

    const filterTemparatureData = (data) => {
        const tempObjectValues = {}
        data.forEach((element) => {
            if (!tempObjectValues.soc) {
                tempObjectValues.soc = [];
                tempObjectValues.soc.push(element.soc)
                element.cellTemp.map((cellValue, index) => {
                    tempObjectValues['ct' + (index + 1)] = [];
                    tempObjectValues['ct' + (index + 1)].push(cellValue)
                })
            } else {
                tempObjectValues.soc.push(element.soc);
                element.cellTemp.map((cellValue, index) => {
                    tempObjectValues['ct' + (index + 1)].push(cellValue);
                })
            }
        });

        const graphModefications = [];

        Object.keys(tempObjectValues).forEach(function (key, index) {
            const tempObject = {
                data: [],
                color: '',
                isFilled: false,
                borderThickness: 1
            }
            if (key === 'soc') {
                tempObject.isFilled = true
            }
            tempObject.data = tempObjectValues[key];
            tempObject.color = COLORSARR[index];
            graphModefications.push(tempObject);
        });

        setGraphData(graphModefications)
    }

    return (
        <>
            <ChartContainer height="450px">
                <LineChart
                    chartOptions={{
                        ...lineChartOptions,
                        labels: stateOfBatteryLabel,
                        graphData: graphData.map((data) => ({
                            data: data.data,
                            lineColor: data.color,
                            isFilled: data.isFilled,
                            borderThickness: data.borderThickness,
                            order: 1,
                        })),
                        chartTitle: "Battery Temperature VS State of Charge ",
                        stepSize: "5",
                        isYAxisGridVisible: true,
                        isGridDotted: true,
                        isXAxisVisible: false,
                    }}
                />
            </ChartContainer>
            <ChartContainer height="450px">
                <LineChart
                    chartOptions={{
                        ...lineChartOptions,
                        labels: stateOfBatteryLabel,
                        graphData: mosfetTemp.map((data) => ({
                            data: data.data,
                            lineColor: data.color,
                            isFilled: data.isFilled,
                            borderThickness: data.borderThickness,
                            order: 1,
                        })),
                        chartTitle: "Mosfet Temperature VS Ambient Temperature",
                        stepSize: "5",
                        isYAxisGridVisible: true,
                        isGridDotted: true,
                        isXAxisVisible: false,
                    }}
                />
            </ChartContainer>
        </>
    );
}

export default TemperatureChart;
