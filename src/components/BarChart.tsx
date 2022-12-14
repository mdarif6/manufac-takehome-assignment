import React from "react";
import WineData from "../Wine-Data.json";
import ReactECharts from "echarts-for-react";
interface AlcoholData {
  [key: number]: number[];
}
export default function BarChart() {
  // Get Malic Acid data for each alcohol category
  const getAlcoholTypesArrays = () => {
    const alcoholData: AlcoholData = {};
    for (let i = 0; i < WineData.length; i++) {
      if (alcoholData[WineData[i].Alcohol]) {
        alcoholData[WineData[i].Alcohol].push(WineData[i]["Malic Acid"]);
      } else {
        alcoholData[WineData[i].Alcohol] = [];
      }
    }
    return alcoholData;
  };

  let alcoholCategoryWiseData = getAlcoholTypesArrays();
  let malicAcidDataList = Object.values(alcoholCategoryWiseData);

  // Get Average of Malic Acid Data for Alcohol Category
  let malicAcidAverageList = malicAcidDataList.map((item) => {
    let sumOfItemValues = item.reduce(
      (acc: number, curr: number) => acc + curr,
      0
    );
    let averageOfItems = (sumOfItemValues / item.length).toFixed(2);
    return averageOfItems;
  });

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    title: {
      text: " Bar Chart",
      left: "center",
    },
    xAxis: {
      name: "Alcohol",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 10,
      },
      data: Object.keys(alcoholCategoryWiseData),
    },
    yAxis: {
      name: "Avg of Malic Acid",
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
        type: "bar",
        data: malicAcidAverageList,
        name: "Avg of Malic Acid",
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
}
