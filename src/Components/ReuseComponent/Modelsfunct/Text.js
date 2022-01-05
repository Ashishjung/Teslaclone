import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Text = ({ title, descr }) => {
  return (
    <>
      <Wraptext>
        <Fade bottom>
          <h3>{title}</h3>
          <p>{descr}</p>
        </Fade>
      </Wraptext>
    </>
  );
};

export default Text;
const Wraptext = styled.div`
  display: flex;
  padding-left: 3rem;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: white;
    text-align: left;
  }
  p {
    color: white;
    width: 22rem;
    margin-top: 0.7rem;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    margin-top: 2rem;
    p {
      width: 20rem;
    }
  }
`;
