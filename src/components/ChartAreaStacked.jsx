import { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartAreaStacked() {
  const [series, setSeries] = useState([
    {
      name: 'text',
      data: [50, 200, 150, 250, 150, 270, 100]
    },
    {
      name: 'text',
      data: [50, 200, 150, 250, 150, 270, 100]
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      zoom: {enabled: false},
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
    labels: ['text', 'text', 'text', 'text', 'text', 'text', 'text'],
    dataLabels: {
      enabled: false,
    },
    grid: { show: false },
    stroke: {
      curve: "smooth",
      width: 2
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: '12px',
      labels: {
        colors: "#8A92A6",
      },
      fontFamily: "NotoSansKR",
      itemMargin: {
        horizontal: 20,
      },
      offsetY: -10,
      markers: {
        width: 10,
        height: 10,
        offsetX: -10,
      },
    },
    yaxis: {
      tickAmount: 3,
      labels: {
        style: {
          colors: "#8A92A6",
          fontSize: '14px',
          fontFamily: "NotoSansKR"
        },
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: "#8A92A6",
          fontSize: '14px',
          fontFamily: "NotoSansKR"
        }
      },
      tooltip: {
        enabled: false,
      }
    }
  });

  return (
    <div className="chart_area">
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
}