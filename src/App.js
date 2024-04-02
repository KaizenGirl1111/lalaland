import React, { useEffect } from "react";
import { CategoryScale } from "chart.js";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Matrics from "./Metrics";
import Logs from "./Logs";

import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === "/") {
      navigate("/metrics");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route exact path="/metrics" element={<Matrics />} />
      <Route exact path="/logs" element={<Logs />} />
    </Routes>
  );
}

export default App;
