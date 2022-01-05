import React from "react";
import styled from "styled-components";
const Powertrain = ({ desc }) => {
  return (
    <>
      <Container>
        <Textbox>
          <h2>Electric Powertrain</h2>
          <p>{desc}</p>
        </Textbox>
        <Imgbox>
          <img src="./images/powertrain.png" alt="powertrain" />
        </Imgbox>
      </Container>
    </>
  );
};

export default Powertrain;
const Container = styled.div`
  width: 100%;
  height: 40rem;
  overflow-y: hidden;
  background-color: rgba(180, 178, 178, 0.417);
  @media (max-width: 768px) {
    height: 30rem;
  }
`;
const Textbox = styled.div`
  width: 100%;
  height: 10rem;
  padding-left: 10rem;
  padding-top: 1rem;
  p {
    width: 40rem;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-top: 2rem;
    p {
      max-width: 22rem;
    }
  }
`;
const Imgbox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 768px) {
    height: 20rem;
    img {
      height: 75%;
    }
  }
`;
