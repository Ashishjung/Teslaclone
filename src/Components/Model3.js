import React from "react";
import Cardetail from "./Cardetail";
import styled from "styled-components";
const Model3 = () => {
  return (
    <div>
      <Cardetail
        bgimage="model-3.jpg"
        name="Model 3"
        speed="3.1s"
        range="0-60 mph"
        speed2="358 mi"
        range2="Range (EPA est.)"
        speed3=" AWD"
        range3="Dual Motor"
        color="rgba(0, 0, 0, 0.65)"
      />
    </div>
  );
};

export default Model3;
