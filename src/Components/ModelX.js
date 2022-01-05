import React from "react";
import Cardetail from "./Cardetail";
import ModelXfunct from "./ModelX/ModelXfunct";
const ModelX = () => {
  return (
    <div>
      <Cardetail
        bgimage="model-x.jpg"
        name="Model X"
        description="Plaid"
        speed="333mi"
        range="Range (EPA est.)"
        speed2="2.5 s"
        range2="9.9s"
        speed3=" 1/4 Mile"
        range3="Top Speed†"
        speed4="1,020hp"
        range4="Peak Power"
        color="white"
      />
      <ModelXfunct />
    </div>
  );
};

export default ModelX;
