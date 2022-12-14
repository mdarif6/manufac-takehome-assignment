import React from "react";
import WineData from "../Wine-Data.json";
import ReactECharts from "echarts-for-react";

export default function ScatterPlot() {
  //Getting value of Hue and value of Color Intensity using map on Data
  let hueValues = WineData.map((item) => item.Hue);
  let colorIntensityValues = WineData.map((item) => item["Color intensity"]);

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    title: {
      text: "Scatter Plot",
      left: "center",
    },
    xAxis: {
      data: colorIntensityValues,
      name: "Color Intensity",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 10,
      },
    },
    yAxis: {
      name: "Hue",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 5,
      },
    },

    series: [
      {
        type: "scatter",
        data: hueValues,
        name: "Hue",
      },
    ],
  };

  return (
    <div className="scatterplot">
      <ReactECharts option={option} />
    </div>
  );
}
