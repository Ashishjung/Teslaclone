import React from "react";
import styled from "styled-components";
const Sblue = ({
  img,
  featureF,
  StrengthF,
  featureS,
  StrengthS,
  featureT,
  StrengthT,
  name,
  quality,
  description,
}) => {
  return (
    <Container>
      <Imgbox>
        <img src={img} alt="modelS" />
        <Textbox>
          <h3>
            {featureF}
            <p>{StrengthF}</p>
          </h3>
          <h3>
            {featureS}
            <p>{StrengthS}</p>
          </h3>
          <h3>
            {featureT}
            <p>{StrengthT}</p>
          </h3>
        </Textbox>
      </Imgbox>
      <Plaidbox>
        <Pfirst>
          <p>{name}</p>
          <h2>{quality}</h2>
          <Orderbutn>Order Now</Orderbutn>
        </Pfirst>
        <p>{description}</p>
      </Plaidbox>
    </Container>
  );
};

export default Sblue;
const Container = styled.div`
  width: 100%;
  height: 45rem;
  overflow-y: hidden;
  background: white;
`;
const Imgbox = styled.div`
  width: 100%;
  height: 30rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Textbox = styled.div`
  width: 100%;
  height: 20rem;
  position: absolute;
  top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 2rem;
    color: white;
    font-size: 1.8rem;
    p {
      font-size: 0.8rem;
    }
  }
`;
const Plaidbox = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  h2 {
    color: black;
    font-weight: bold;
  }
  p {
    width: 35rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    p {
      width: 24rem;
      margin: 0.5rem;
    }
  }
`;
const Pfirst = styled.div`
  width: 40%;
  padding-left: 5rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
  }
`;
const Orderbutn = styled.div`
  width: 190px;
  height: 40px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 1rem;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 350px;
  }
`;
