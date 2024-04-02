import React, { useState, useEffect, useRef } from "react";
import { MimicLogs } from "../../api-mimic";
import { getTimeStampList } from "../../hooks/getTimeStampList";
import { LoadingOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "./LogScreen.css";

export const LogScreen = ({timeValue}) => {
  const logContainerRef = useRef(null);
  const loadMoreButtonRef = useRef(null);
  const [liveLogs, setLiveLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ count, setCount] = useState(0)
  const timeStamps = getTimeStampList()

  useEffect(()=>{
    const fetchPreviousLogsFunction =async () => {
      const newLogs =await MimicLogs.fetchPreviousLogs({ startTs: timeStamps[timeValue], endTs: Date.now(), limit: 100 });
      setLiveLogs(newLogs)
    }

    fetchPreviousLogsFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[timeValue])

  useEffect(() => {
    const unsubscribe = MimicLogs.subscribeToLiveLogs((newLog) => {
      setLiveLogs((prevLogs) => [newLog, ...prevLogs]);
    });

    return () => unsubscribe();
  }, []);

  const scrollDown = () => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTo({
        top: logContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    setCount(0)
  };
  const handleLoadMore = async () => {
    setIsLoading(true);
    const newLogs = await MimicLogs.fetchPreviousLogs({ startTs: liveLogs?.[0].timestamp - 3600000, endTs: liveLogs?.[0].timestamp, limit: 100 });
    setLiveLogs((prevLogs) => [...newLogs, ...prevLogs]);
    setIsLoading(false);
  };

  return (
    <div className="log">
       <div className="main-wrapper">
        <div>
        {isLoading&& (
          <div className="loading-text">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color:"white" }} spin />} /> Loading previous 100 logs</div>
        )}
          <div
             ref={logContainerRef}
             className="text-white pt-10 whitespace-pre h-[90vh] overflow-y-auto"
             style={{ display: 'flex', flexDirection: 'column-reverse' }}
             onScroll={(e) => {
              setCount(e.target.scrollTop)
               if (e.target.scrollTop !== 0 && !isLoading) {
                 handleLoadMore();
               }
             }}
          >
            {liveLogs?.map((data, index) => (
              <div className="flex" key={index}>
                <div className="flex">
                  <div className="dash">|</div>
                  <p className="mr-2 message">{`${new Date()
                    .toLocaleString()
                    .replace("T", " ")} : `}</p>
                  <p className="logs">{data.message}</p>
                </div>
              </div>
            ))}
            
          </div>
          {count !== 0 && (
            <button
              ref={loadMoreButtonRef}
              className="fixed bottom-5 right-20 px-4 py-2 bg-blue-500 text-white rounded-md button"
              onClick={scrollDown}
              style={{backgroundColor:"#4338CA"}}
            >
              100 new logs <ArrowDownOutlined />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
