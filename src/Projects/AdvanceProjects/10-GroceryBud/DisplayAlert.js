import React, { useEffect } from "react";

const DisplayAlert = ({ action, msg, removeAlert, list }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      removeAlert();
    }, 3000);
    return () => clearInterval(interval);
  }, [list]);
  return <span className={`alert alert-${action}`}>{msg}</span>;
};

export default DisplayAlert;
