import React from "react";
import styled from "styled-components";

const Cardetail = ({
  bgimage,
  name,
  description,
  speed,
  range,
  speed2,
  range2,
  speed3,
  range3,
  speed4,
  range4,
  color,
}) => {
  return (
    <>
      <Wrap bgimg={bgimage}>
        <Itemtext>
          <h1>{name}</h1>
          <p>{description}</p>
        </Itemtext>
        <Itemdata>
          <Itemdetail txtcolor={color}>
            <h5>
              {speed}
              <p>{range}</p>
            </h5>
            <h5>
              {speed2}
              <p>{range2}</p>
            </h5>
            <h5>
              {speed3}
              <p>{range3}</p>
            </h5>
            {speed4 && (
              <h5>
                {speed4}
                <p>{range4}</p>
              </h5>
            )}

            <Ordernow txtcolor={color}>Ordernow</Ordernow>
          </Itemdetail>
          <DownArrow src="./images/down-arrow.svg"></DownArrow>
        </Itemdata>
      </Wrap>
    </>
  );
};

export default Cardetail;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Itemtext = styled.h1`
  padding-top: 6.3rem;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.719);
`;
const Itemdata = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Itemdetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 0.8rem;
  h5 {
    color: ${(props) => props.txtcolor};
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    h5 {
      font-size: 1.2rem;
      margin: 0.2rem;
    }
  }
`;
const Ordernow = styled.button`
  width: 190px;
  height: 40px;
  border: 2px solid ${(props) => props.txtcolor};
  background-color: transparent;
  color: ${(props) => props.txtcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 290px;
    margin-top: 1rem;
  }
`;
const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 10px;
  animation: animatedown 1.5s infinite;
`;
