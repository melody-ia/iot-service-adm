import { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartArea() {
  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [10, 50, 30, 80]
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      zoom: {enabled: false},
      toolbar: { show: false },
      background: "transparent",
    },
    fill: {
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0.08,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#42A0F0"]
    },
    grid: { show: false },
    yaxis: { show: false },
    xaxis: { 
      labels: { show: false },
      axisTicks: { show: false }, 
      axisBorder: { show: false },
      tooltip: {
        enabled: false,
      }
    },
    tooltip: {
      enabled: false,
    }
  });

  return (
    <div className="chart_area">
      <Chart options={options} series={series} type="area" height={146} />
    </div>
  );
}