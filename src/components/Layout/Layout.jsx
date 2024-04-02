import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../stories/Header";

export const Layout = ({ children, onChangeDropdown }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentTab, setCurrentTab] = useState();
  const [value, setValue] = useState("Last 5 min");

  useEffect(() => {
    onChangeDropdown?.("Last 5 min");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentPath === "/") {
      setCurrentTab("/metrics");
    } else {
      setCurrentTab(currentPath);
    }
  }, [currentPath]);

  const handleTabChange = (e) => {
    navigate(`/${e.key}`);
  };

  const handleDropdown = (data) => {
    setValue(data);
    onChangeDropdown?.(data);
  };

  return (
    <div>
      <Header
        current={currentTab}
        onClick={(e) => {
          setCurrentTab(e.key);
          handleTabChange(e);
        }}
        onChangeDropdownValue={handleDropdown}
        value={value}
      />
      <main>{children}</main>
    </div>
  );
};
