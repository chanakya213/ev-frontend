import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

// gaugeNeedle Block

const gaugeNeedle = {
    id: "gaugeNeedle",
    afterDatasetDraw(chart, args, options, data) {
        const {
            ctx,
            chartArea: { width },
        } = chart;
        ctx.save();

        const needleValue = data.datasets[0].needleValue;
        const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);

        const formatValue = (value) => {
            // Format value with "k" suffix and decimals
            if (value >= 1000 && value % 1000 === 0) {
                return ` ${value / 1000}k`;
            } else if (value >= 1000 && value % 1000 !== 0) {
                return `${(value / 1000).toFixed(2)}k`;
            } else {
                return value;
            }
        };

        const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
        const cx = width / 2;
        const cy = chart._metasets[0].data[0].y;
        const needleLength = chart._metasets[0].data[0].outerRadius - 20;
        const lineWidth = 25;

        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, -lineWidth / 2);
        ctx.lineTo(needleLength, 0);
        ctx.lineTo(0, lineWidth / 2);
        ctx.fillStyle = "#EFAA6C";
        ctx.fill();

        // needle dot
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.arc(cx, cy, 15, 0, 10);
        ctx.fill();
        ctx.restore();

        ctx.font = "36px Helvetica bold";
        ctx.fillStyle = "#EFAA6C";
        ctx.fillText(formatValue(needleValue), cx, cy + 50);
        ctx.textAlign = "center";
        ctx.restore();

        ctx.font = "30px Helvetica bold";
        ctx.fillStyle = "#8B8484";
        ctx.fillText(0, cx - width / 2 + 8, cy + 50);
        ctx.textAlign = "center";
        ctx.restore();

        ctx.font = "30px Helvetica bold";
        ctx.fillStyle = "#8B8484";
        ctx.fillText(formatValue(dataTotal), cx + width / 2 - 25, cy + 50);
        ctx.textAlign = "center";
        ctx.restore();
    },
};





const HalfDounut = ({ inputData = [30, 30, 30], needleData = '100', title }) => {
    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: title,
                color: '#615E5E',
                align: 'center',
                position: 'bottom',
                padding: {
                    top: 50,
                    bottom: 20
                },
                font: {
                    size: 18
                }
            },
            tooltip: {
                enabled: false,
            }
        },
        rotation: -90,
        circumference: 180,
        cutout: "90%",
        maintainAspectRatio: false,
        responsive: true,
    };
    const chartData = {
        datasets: [
            {
                data: inputData,
                backgroundColor: ["#EA6868", "#EFAA6C", "#94E096"],
                borderWidth: [0, 0, 0],
                display: true,
                needleValue: needleData,
            },
        ],
    };

    return (
        <Doughnut data={chartData} width="200px" height="200px" options={options} plugins={[{ ...gaugeNeedle, afterDatasetDraw: (chart, args, options) => gaugeNeedle.afterDatasetDraw(chart, args, options, chartData) }]} />
    );
};

export default HalfDounut;
