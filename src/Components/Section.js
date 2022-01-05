import React from "react";
import styled from "styled-components";
import "../index.css";
import Fade from "react-reveal/Fade";
const Section = ({
  name,
  description,
  Lbutnname,
  Rbutname,
  bgimage,
  downarr,
  isbtn,
}) => {
  return (
    <Wrap bgimg={bgimage}>
      <Fade bottom>
        <Itemtext>
          <h1>{name}</h1>
          <p>{description}</p>
        </Itemtext>

        <Buttongroup>
          <Allbuttons>
            {isbtn && <Leftagainbutton>{Lbutnname}</Leftagainbutton>}
            {isbtn || <Leftbutton>{Lbutnname}</Leftbutton>}

            {Rbutname && <Rightbutton>{Rbutname}</Rightbutton>}
          </Allbuttons>
          <DownArrow src={downarr} />
        </Buttongroup>
      </Fade>
    </Wrap>
  );
};

export default Section;
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  overflow-y: hideen;
  justify-content: space-between;
  align-items: center;
`;
const Itemtext = styled.h1`
  padding-top: 6.3rem;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.719);
`;
const Buttongroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: Center;
`;
export const Leftbutton = styled.div`
  width: 256px;
  height: 40px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const Rightbutton = styled(Leftbutton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const Leftagainbutton = styled(Leftbutton)`
  background-color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  margin-top: 1rem;
  animation: animatedown 1.5s infinite;
`;
const Allbuttons = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
