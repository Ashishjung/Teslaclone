import React from "react";
import styled from "styled-components";
const Newinterior = () => {
  return (
    <div>
      <NewInterior>
        <h2>All-New Interior</h2>
      </NewInterior>
    </div>
  );
};

export default Newinterior;
const NewInterior = styled.div`
  width: 100%;
  overflow-y: hidden;
  background-color: black;
  height: 100vh;
  background-image: url("./images/ModelS/Interior.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5rem;
  text-align: center;
  padding-top: 30px;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    opacity: 0.4;
    height: 90%;
    background-color: black;
  }
  h2 {
    color: white;
  }
`;
