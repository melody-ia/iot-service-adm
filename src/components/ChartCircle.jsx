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
        horizontal: 30,
        vertical: 12
      },
      markers: {
        offsetX: -10,
        offsetY: 10
      },
      formatter: function(label, opts) {
        return label + "<br /><span class='label_value'>" + opts.w.globals.series[opts.seriesIndex] + "</span>";
      } 
    },
    series: [82, 60],
    labels: ['TEXT', 'TEXT'],
    colors: ['#CCF0E3', '#3BC996'],
    stroke: {
      lineCap: 'round'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            fontSize: "24px",
            fontWeight: 600,
            fontFamily: "NotoSansKR",
            color: "#1F2937",
            offsetY: 10
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
          size: '45%',
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