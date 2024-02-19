import React, { useEffect, useState } from "react";
import { AlarmListBox, LineChartContainer, Chart } from "../vehicle.styles";
import LineChart from "../Charts/LineChart";
import { MotarLabel } from "../staticData";
import { HeadingTag } from "../../dashboard/components";
import { GET_SINGLE_VEHICLE_ALARM_LIST } from "../../../services";

import { lineChartOptions } from "../ChartProps/chartProps";

function AlarmList({ dvid }) {
    const [alarmChartData, setAlarmChartData] = useState([]);

    useEffect(() => {
        const getAlarmData = () => {
            GET_SINGLE_VEHICLE_ALARM_LIST(dvid)
                .then((res) => {
                    filterAlarmChartData(res.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        if (dvid) {
            getAlarmData();
        }
    }, [dvid]);

    const filterAlarmChartData = (data) => {
        const filteredData = {
            rpm: [],
            totalInputCurrent: [],
            inputVoltage: [],
            motorTemp: [],
        };
        data.forEach((element) => {
            filteredData["rpm"].push(element.rpm);
            filteredData["totalInputCurrent"].push(element.totalInputCurrent);
            filteredData["inputVoltage"].push(element.inputVoltage);
            filteredData["motorTemp"].push(element.motorTemp);
        });
        setAlarmChartData(filteredData);
    };

    return (
        <AlarmListBox>
            <HeadingTag title={"Alarm List2"} />
            <LineChartContainer>
                <Chart>
                    <LineChart
                        chartOptions={{
                            ...lineChartOptions,
                            labels: MotarLabel.slice(
                                0,
                                alarmChartData?.rpm?.length
                            ),
                            graphData: [
                                {
                                    data: alarmChartData.rpm,
                                    lineColor: "#2563EB",
                                    isFilled: true,
                                    order: 1,
                                },
                            ],
                            chartTitle: "Max Motar RPM",
                            stepSize: "5000",
                            isYAxisGridVisible: true,
                        }}
                    />
                </Chart>
                <Chart>
                    <LineChart
                        chartOptions={{
                            ...lineChartOptions,
                            labels: MotarLabel.slice(
                                0,
                                alarmChartData?.totalInputCurrent?.length
                            ),
                            graphData: [
                                {
                                    data: alarmChartData.totalInputCurrent,
                                    lineColor: "#2563EB",
                                    isFilled: true,
                                    order: 1,
                                },
                            ],
                            chartTitle: "Max Motar Current",
                            stepSize: "500",
                            isYAxisGridVisible: true,
                        }}
                    />
                </Chart>
                <Chart>
                    <LineChart
                        chartOptions={{
                            ...lineChartOptions,
                            labels: MotarLabel.slice(
                                0,
                                alarmChartData?.inputVoltage?.length
                            ),
                            graphData: [
                                {
                                    data: alarmChartData.inputVoltage,
                                    lineColor: "#2563EB",
                                    isFilled: true,
                                    order: 1,
                                },
                            ],
                            chartTitle: "Max Motar Temperature",
                            stepSize: "10000",
                            isYAxisGridVisible: true,
                        }}
                    />
                </Chart>
                <Chart>
                    <LineChart
                        chartOptions={{
                            ...lineChartOptions,
                            labels: MotarLabel.slice(
                                0,
                                alarmChartData?.motorTemp?.length
                            ),
                            graphData: [
                                {
                                    data: alarmChartData.motorTemp,
                                    lineColor: "#2563EB",
                                    isFilled: true,
                                    order: 1,
                                },
                            ],
                            chartTitle: "Max Motar Voltage",
                            stepSize: "100",
                            isYAxisGridVisible: true,
                        }}
                    />
                </Chart>
            </LineChartContainer>
        </AlarmListBox>
    );
}

export default AlarmList;
