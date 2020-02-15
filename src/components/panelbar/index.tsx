import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles.css";

const PanelBar: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const panelBar = data && data.data ? data.data : [];
  
  return (
    <div className="rounded bg-white">
      
    </div>
  );
};

export default PanelBar;
