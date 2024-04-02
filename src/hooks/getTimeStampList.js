export const getTimeStampList = () => {
  const getCurrentTimestamp = () => new Date().getTime();

  return {
    "Last 5 min": getCurrentTimestamp() - 5 * 60 * 1000,
    "Last 15 min": getCurrentTimestamp() - 15 * 60 * 1000,
    "Last 30 min": getCurrentTimestamp() - 30 * 60 * 1000,
    "Last 1 hour": getCurrentTimestamp() - 60 * 60 * 1000,
    "Last 3 hours": getCurrentTimestamp() - 180 * 60 * 1000,
    "Last 6 hours": getCurrentTimestamp() - 360 * 60 * 1000,
  };
};
