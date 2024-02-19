import { Line } from "react-chartjs-2";

const formattedValue = (value) => {
    if (value >= 1000) {
        return `${value / 1000}k`;
    } else {
        return value;
    }
};

function LineChart({ chartOptions }) {
    const {
        labels: chartLables,
        graphData,
        chartTitle,
        isLegendVisible,
        stepSize = "",
        isGridDotted,
        isXAxisGridVisible,
        isYAxisGridVisible,
        isXAxisVisible,
        isYAxisVisible,
        xAxisTitleVisible,
        yAxisTitleVisible,
        xAxisTitleText,
        yAxisTitleText,
        legendPos = "top",
    } = chartOptions;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    color: "Black",
                    display: xAxisTitleVisible,
                    text: xAxisTitleText,
                    font: { size: " 14px", weight: "bolder" },
                },
                ticks: {
                    beginAtZero: true,
                    display: isXAxisVisible,
                },
                border: {
                    display: false,
                    dash: isGridDotted ? [10, 5] : "",
                },
                grid: {
                    display: isXAxisGridVisible ? true : false,
                    color: "rgba(0, 0, 0,0.2)",
                    tickColor: "",
                    borderColor: "",
                },
            },
            y: {
                title: {
                    color: "Black",
                    display: yAxisTitleVisible,
                    text: yAxisTitleText,
                    font: { size: " 14px", weight: "bolder" },
                },
                ticks: {
                    display: isYAxisVisible,
                    callback: formattedValue,
                    stepSize: stepSize,
                },
                border: {
                    display: false,
                    dash: isGridDotted ? [20, 15] : "",
                },
                grid: {
                    display: isYAxisGridVisible ? true : false,
                    color: "rgba(0, 0, 0,0.2)",
                },
            },
        },
        elements: {
            point: {
                radius: 0, // Set radius to 0 to hide dots
            },
        },
        plugins: {
            legend: {
                display: isLegendVisible ? true : false,
                position: legendPos,
                padding: {
                    bottom: 40,
                },
                align: "start",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    color: "#000",
                    font: {
                        size: 12,
                        weight: "bold",
                        color: "yellow",
                    },
                },
            },
            title: {
                display: chartTitle ? true : false,
                text: ` ${chartTitle}`,
                align: "center",
                padding: {
                    top: 10,
                    bottom: 30,
                },
                color: "#615E5E",
                font: { size: " 14px", weight: "bolder" },
            },
        },
    };

    const datasets = graphData.map((chart) => ({
        label: chart.dataLegendTitle,
        data: chart.data,
        order: chart.order,
        backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const height = context.chart.height;
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "rgba(135, 206, 250, 0.9)");
            gradient.addColorStop(1, "rgba(135, 206, 250, 0)");
            return gradient;
        },
        borderColor: chart.lineColor,
        pointBackgroundColor: chart.lineColor,
        fill: chart.isFilled || false,
        tension: 0.1,
        borderWidth: chart.borderThickness || 2,
    }));

    const data = {
        labels: chartLables,
        datasets: datasets,
    };
    return <Line data={data} options={options} />;
}

export default LineChart;
