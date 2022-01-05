import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
let slideImages = [
  {
    image: "./images/ModelS/monitor.jpg",
    title: "17” Cinematic Display",
    desc: "With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere. ",
  },
  {
    image: "./images/ModelS/carstering.jpg",
    title: "Focus on Driving",
    desc: "The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in. ",
  },
  {
    image: "./images/ModelS/seat.jpg",
    title: "Perfect Environment",
    desc: "Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard. ",
  },
  {
    image: "./images/ModelS/game.jpg",
    title: "Redesigned Second Row",
    desc: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging. ",
  },
];
const Slider = () => {
  let [changeslide, setchangeslide] = useState(0);

  const nextSlide = () => {
    if (slideImages.length - 1 !== changeslide) {
      setchangeslide(changeslide + 1);
    } else {
      setchangeslide(0);
    }
  };
  const prevSlide = () => {
    if (changeslide !== 0) {
      setchangeslide(changeslide - 1);
    } else {
      setchangeslide(slideImages.length - 1);
    }
  };
  useEffect(() => {
    let interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <Sliderbox>
        <Sliderimage>
          <img src={slideImages[changeslide].image} alt="Model S" />
          <PrevNextbutton>
            <img
              src="./images/ModelS/prev.svg"
              alt="prev"
              onClick={() => {
                prevSlide();
              }}
            />
            <img
              src="./images/ModelS/next.svg"
              alt="next"
              onClick={() => {
                nextSlide();
              }}
            />
          </PrevNextbutton>
        </Sliderimage>

        <Slidertext>
          <h2>{slideImages[changeslide].title}</h2>
          <p>{slideImages[changeslide].desc}</p>
        </Slidertext>
      </Sliderbox>
    </>
  );
};

export default Slider;
const Sliderbox = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  overflow-y: hidden;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: black;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;
const Sliderimage = styled.div`
  width: 95%;
  height: 80%;
  position: relative;
  margin-top: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 50%;
  }
`;
const Slidertext = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  h2 {
    color: white;
  }
  p {
    color: white;
    width: 50rem;
  }
  @media (max-width: 768px) {
    p {
      width: 20rem;
    }
  }
`;
const PrevNextbutton = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 250px;
  img {
    width: 50%;
    cursor: pointer;
    margin: 29rem;
    height: 30%;
  }
  @media (max-width: 768px) {
    top: 100px;
    img {
      margin: 8rem;
    }
  }
`;
