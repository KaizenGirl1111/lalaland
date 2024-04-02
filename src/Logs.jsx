import React, { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { LogScreen } from "./stories/LogScreen/LogScreen";
import { getTimeStampList } from "./hooks/getTimeStampList";
import dayjs from "dayjs";
import "./Logs.css";

const Logs = () => {
  const [timeValue, setTimeValue] = useState("Last 5 min");
  const timeStampList = getTimeStampList();

  const handleChangeValue = (value) => {
    setTimeValue(value);
  };
  return (
    <Layout onChangeDropdown={handleChangeValue}>
      <div className="log-Screen-wrapper">
        <div className="text-wrapper">
          <div className="text">
            Showing logs for{" "}
            {dayjs(timeStampList[timeValue]).format("DD/MM/YYYY HH:mm") +
              " - " +
              dayjs().format("DD/MM/YYYY HH:mm")}
          </div>
        </div>
        <div className="log-screen">
          <LogScreen timeValue={timeValue} />
        </div>
      </div>
    </Layout>
  );
};

export default Logs;
