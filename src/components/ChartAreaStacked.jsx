import { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartAreaStacked({ chartData }) {
  const [series, setSeries] = useState([
    {
      name: "프로모션1",
      data: [
        parseInt(chartData[0].week_ch_count),
        parseInt(chartData[1].week_ch_count),
        parseInt(chartData[2].week_ch_count),
        parseInt(chartData[3].week_ch_count),
        parseInt(chartData[4].week_ch_count),
        parseInt(chartData[5].week_ch_count),
        parseInt(chartData[6].week_ch_count),
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
      background: "transparent",
      stacked: true,
    },
    fill: {
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.08,
      },
    },
    labels: [
      chartData[0].date,
      chartData[1].date,
      chartData[2].date,
      chartData[3].date,
      chartData[4].date,
      chartData[5].date,
      chartData[6].date,
    ],
    dataLabels: {
      enabled: false,
    },
    grid: { show: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      labels: {
        colors: "#8A92A6",
      },
      fontFamily: "NotoSansKR",
      itemMargin: {
        horizontal: 16,
      },
      offsetY: -10,
      markers: {
        width: 10,
        height: 10,
        offsetX: -6,
        offsetY: 1,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        style: {
          colors: "#8A92A6",
          fontSize: "14px",
          fontFamily: "NotoSansKR",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#8A92A6",
          fontSize: "14px",
          fontFamily: "NotoSansKR",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  });

  return (
    <div className="chart_area">
      <Chart options={options} series={series} type="area" height={250} />
    </div>
  );
}
