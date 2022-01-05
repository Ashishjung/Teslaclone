import React from "react";
import styled from "styled-components";
import Cardetail from "./Cardetail";
import Newinterior from "./ReuseComponent/Newinterior";
import Slider from "./ReuseComponent/Slider";
import Modelfunct from "./ReuseComponent/Modelfunct";
const ModelS = () => {
  return (
    <>
      <Cardetail
        bgimage="model-s.jpg"
        name="Model S"
        description="Plaid"
        speed="396mi"
        range="Range (EPA est.)"
        speed2="1.99 s"
        range2="0-60 mph*"
        speed3=" 200 mph"
        range3="Top Speed†"
        speed4="1,020hp"
        range4="Peak Power"
        color="white"
      />
      <Newinterior />
      <Slider />
      <Modelfunct />
    </>
  );
};

export default ModelS;
