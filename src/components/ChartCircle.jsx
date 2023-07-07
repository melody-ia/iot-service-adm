import { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartAreaCircle() {
  const [options, setOptions] = useState({
    legend: {
      show: true,
      fontSize: '16px',
      labels: {
        colors: "#8A92A6",
      },
      fontFamily: "NotoSansKR",
      itemMargin: {
        horizontal: 10,
        vertical: 20
      },
      markers: {
        offsetX: -20,
        offsetY: 10
      },
      formatter: function(label, opts) {
        return label + "<br /><span class='label_value'>" + opts.w.globals.series[opts.seriesIndex] + "</span>";
      } 
    },
    series: [82, 60],
    // series: [90, 70],
    labels: ['text', 'text'],
    colors: ['#3BC996', '#CCF0E3'],
    stroke: {
      lineCap: 'round'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            fontSize: "24px",
            fontWeight: 500,
            fontFamily: "NotoSansKR",
            color: "#1F2937",
            offsetY: 9
          },
          name: {
            show: false,
          },
          total: {
            show: true,
            label: "",
            fontFamily: "NotoSansKR"
          }
        },
        hollow: {
          size: '50%',
        },
        track: {
          background: '#E9ECEF',
          strokeWidth: '45%',
          margin: 10, 
        }
      }
    }
  });

  return (
    <div className="chart_area">
      <Chart options={options} series={options.series} type="radialBar" height={250}/>
    </div>
  );
}