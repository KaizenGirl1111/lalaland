import React, { useState, useEffect } from "react";
import { MimicMetrics } from "../../api-mimic";
import dayjs from "dayjs";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./Chart.css";
import { Spin } from 'antd';
import { getTimeStampList } from "../../hooks/getTimeStampList";
Chart.register(CategoryScale);

const data = {
  labels: [],
  datasets: [],
};

const option = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "",
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const GraphLineColor = {
  0: "#2563EB",
  1: "#DC2626",
  2: "#059669",
};

export const ChartComponent = ({ timeValue }) => {
  const [loading, setLoading] = useState(true);
  const [metricsData, setMetricsData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartOption, setChartOption] = useState([]);

  const timeStamps = getTimeStampList()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const startTs = timeStamps[timeValue];
        const endTs = new Date().getTime();
        const metricsData1 = await MimicMetrics.fetchMetrics({
          startTs,
          endTs,
        });
        setMetricsData(metricsData1);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeValue]);

  useEffect(() => {
    const d = metricsData?.map((e, index) => {
      return {
        labels: e.graphLines[0]?.values?.map((i) =>
          dayjs(i.timestamp).format("HH:mm")
        ),
        datasets: e.graphLines?.map((el, indexCount) => {
          return {
            label: el.name,
            borderColor: GraphLineColor[indexCount],
            fill: index === 3 ? true : false,
            data: el.values?.map((i) => i.value),
            borderWidth: 2,
            radius: 0,
            pointStyle: "rect",
            type: "line",
          };
        }),
      };
    });

    setChartData(d);

    const options1 = metricsData?.map((e) => {
      return {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
            position: "bottom",
            align: "start",
          },
          title: {
            display: true,
            text: e?.name,
            align: "start",
          },
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
    });
    setChartOption(options1);
  }, [metricsData]);

  return (
    <>
    <div className="chart-wrapper">
    {loading ? <div className="spin"><Spin size="large"/></div> : 
      <div className="chart-sub-wrapper">
        <div>
          <div className="graph">
            <Line
              id="myChart1"
              data={chartData.length === 0 ? data : chartData[0]}
              options={chartOption.length === 0 ? option : chartOption[0]}
            />
          </div>
          <div className="graph">
            <Line
              id="myChart2"
              data={chartData.length === 0 ? data : chartData[1]}
              options={chartOption.length === 0 ? option : chartOption[1]}
            />
          </div>
        </div>
        <div>
          <div className="graph">
            <Line
              id="myChart3"
              data={chartData.length === 0 ? data : chartData[2]}
              options={chartOption.length === 0 ? option : chartOption[2]}
            />
          </div>
          <div className="graph">
            <Line
              id="myChart4"
              data={chartData.length === 0 ? data : chartData[3]}
              options={chartOption.length === 0 ? option : chartOption[3]}
            />
          </div>
        </div>
      </div>}
    </div>
    </>
  );
};
