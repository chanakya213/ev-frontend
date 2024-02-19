// Create a plugin to display labels on top of bars
export const valueOnTopPlugin = {
  id: "valueOnTop",
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#615E5E";

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

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (!meta.hidden) {
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          const formattedValue = formatValue(value);
          ctx.fillText(formattedValue, bar.x, bar.y - 5);
        });
      }
    });

    ctx.restore();
  },
};