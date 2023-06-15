import { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartColumn() {
  const [series, setSeries] = useState([
    {
      name: 'text',
      data: [50, 120, 150, 80, 120, 150, 80]
    }
  ]);
  const [options, setOptions] = useState({
    chart: {
      toolbar: { show: false },
    },
    fill: {
      colors: ["#3BC996"]
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '10px',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      }
    },
    grid: { show: false },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#000"],
        fontWeight: 400,
        fontFamily: "NotoSansKR"
      }
    },
    xaxis: {
      categories: ["월", "화", "수", "목", "금", "토", "일"],
      axisTicks: { show: false }, 
      axisBorder: { show: false },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: ["#637381"],
          fontFamily: "NotoSansKR"
        }
      }
    },
    yaxis: {
      labels: {
        show: false,
      }    
    },
  });

  return (
    <div className="chart_area">
      <Chart options={options} series={series} type="bar" height={270} />
    </div>
  );
}