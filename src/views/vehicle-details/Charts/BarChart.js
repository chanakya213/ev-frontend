import { valueOnTopPlugin } from "./valueOnChart";
import { Bar } from "react-chartjs-2";

function getCommonAxisOptions(isAxisVisible, stepSize, indexAxis) {
  if (!isAxisVisible) {
    return {
      ticks: {
        beginAtZero: true,
        stepSize: stepSize,
        callback: () => "",
      },
      gridLines: {
        display: false,
        drawBorder: false,
      },
      grid: {
        color: "",
        tickColor: "",
        borderColor: "",
      },
      border: {
        display: false,
      },
    };
  }
  return {
    border: {
      color: "#615E5E",
      width: 2,
    },
    ticks: {
      beginAtZero: true,
      stepSize: stepSize ? stepSize : "",
      color: "#615E5E",
      length: 10,
      padding: 9,
    },
    grid: {
      color: "",
      tickColor: indexAxis === "y" ? "" : "black",
    },

    gridLines: {
      display: false,
      drawBorder: false,
    },
  };
}

function BarChart({
  labels,
  graphData,
  title,
  stepSize,
  barColors,
  isXVisible = true,
  isYVisible = true,
  isValueOnBarVisible = false,
  barthickness = 15,
  indexAxis = "x",
}) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: indexAxis,
    scales: {
      x: {
        ...getCommonAxisOptions(isXVisible, stepSize, indexAxis),
        grid: {
          color: "",
          tickColor: "",
        },
      },
      y: {
        ...getCommonAxisOptions(isYVisible, stepSize, indexAxis),
      },
    },
    plugins: {
      legend: {
        display: title ? true : false,
        position: "top",
        labels: {
          boxWidth: 15,
          color: "#615E5E",
        },
      },
      title: {
        display: title ? true : false,
        text: `${title}`,
        color: "#615E5E",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: graphData,
        barThickness: barthickness,
        backgroundColor: barColors,
      },
    ],
  };

  return (
    <Bar
      plugins={
        isValueOnBarVisible && indexAxis === "x" ? [valueOnTopPlugin] : ""
      }
      options={options}
      data={data}
    />
  );
}

export default BarChart;
