import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Imagee = ({ img }) => {
  return (
    <Wrapimg>
      <Fade bottom>
        <img src={img} alt="game" />
      </Fade>
    </Wrapimg>
  );
};

export default Imagee;
const Wrapimg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
