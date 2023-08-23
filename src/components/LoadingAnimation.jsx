import React from "react";
import "./LoadingAnimation.css";
import { CircularProgress } from "@mui/material";

const LoadingAnimation = () => {
  return (
    <div className="loading-spinner-container">
      <CircularProgress style={{ color: "red", marginBottom: "18%" }} />
    </div>
  );
};

export default LoadingAnimation;
