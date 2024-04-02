import React, { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { ChartComponent } from "./stories/Chart/Chart";
import { getTimeStampList } from "./hooks/getTimeStampList";
import "./Metrics.css";
import dayjs from "dayjs";

const Metrics = () => {
  const [timeValue, setTimeValue] = useState("Last 5 min");
  const timeStampList = getTimeStampList();

  const handleChangeValue = (value) => {
    setTimeValue(value);
  };
  return (
    <Layout onChangeDropdown={handleChangeValue}>
      <div className="metrics-wrapper">
        <div className="title-wrapper">
          <div className="title">Metrics</div>
          <div className="subtitle">
            {dayjs(timeStampList[timeValue]).format("DD/MM/YYYY HH:mm") +
              " - " +
              dayjs().format("DD/MM/YYYY HH:mm")}
          </div>
        </div>
        <div className="charts-wrapper">
          <ChartComponent timeValue={timeValue} />
        </div>
      </div>
    </Layout>
  );
};

export default Metrics;
