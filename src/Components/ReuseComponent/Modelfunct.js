import React from "react";
import styled from "styled-components";
import Imagee from "./Modelsfunct/Imagee";
import Text from "./Modelsfunct/Text";
import Sblue from "./Modelsfunct/Sblue";
import Powertrain from "./Powertrain.js";
const Modelfunct = () => {
  return (
    <>
      <Container>
        <Databox>
          <Imagee img="./images/game.jpg" />
          <Text
            title="Game from Anywhere"
            descr="Up to 10 teraflops of processing power enables in-car gaming on-par
          with today’s newest consoles. Wireless controller compatibility lets
          you game from any seat."
          />
          <Text
            title="Stay Connected"
            descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger,
           with enough power to fast-charge your tablets and laptop."
          />
          <Imagee img="./images/connected.jpg" />
          <Imagee img="./images/audio.jpg" />
          <Text
            title="Audio"
            descr="A 22-speaker, 960-watt audio system with Active Road Noise
           Reduction offers the best listening experience wherever you are."
          />
          <Text
            title="Real Storage"
            descr="With front and rear trunks and fold-flat seats,
           Model S is a luxury car where you can fit your bike without taking 
           the wheel off, and your luggage too."
          />
          <Imagee img="./images/cycle.png" />
        </Databox>
        <Respondatabox>
          <Imagee img="./images/game.jpg" />
          <Text
            title="Game from Anywhere"
            descr="Up to 10 teraflops of processing power enables in-car gaming on-par
          with today’s newest consoles. Wireless controller compatibility lets
          you game from any seat."
          />
          <Imagee img="./images/connected.jpg" />
          <Text
            title="Stay Connected"
            descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger,
           with enough power to fast-charge your tablets and laptop."
          />
          <Imagee img="./images/audio.jpg" />
          <Text
            title="Audio"
            descr="A 22-speaker, 960-watt audio system with Active Road Noise
           Reduction offers the best listening experience wherever you are."
          />
          <Imagee img="./images/cycle.png" />
          <Text
            title="Real Storage"
            descr="With front and rear trunks and fold-flat seats,
           Model S is a luxury car where you can fit your bike without taking 
           the wheel off, and your luggage too."
          />
        </Respondatabox>
      </Container>
      <Sblue
        img="./images/modelsblue.jpg"
        featureF="1,020 hp"
        StrengthF="Peak power"
        featureS="9.23s"
        StrengthS="@155 mph 1/4 mile"
        featureT="1.99s"
        StrengthT="0-60 mph*"
        name="Plaid"
        quality="Beyond Ludicrous"
        description="With the longest range and quickest acceleration 
        of any electric vehicle in production, Model S Plaid is the highest performing 
        sedan ever built. All Model S powertrains, 
        with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs."
      />
      <Powertrain
        desc="Model S platforms unite powertrain and battery technologies for
            unrivaled performance, range and efficiency. New module and pack
            thermal architecture allows faster charging and gives you more power
            and endurance in all conditions."
      />
      <Sblue
        img="./images/model-s.jpg"
        StrengthF="Performance-focused chassis"
        featureS="0.208"
        StrengthS="Lowest-drag car on Earth"
        StrengthT="Refined exterior styling"
        name="Exterior"
        quality="Designed for Efficiency"
        description="With the lowest drag coefficient on 
        Earth and unmatched efficiency, Model S is built for speed and range. 
        Together with a wider body and chassis, these elements help you go down 
        the straight or around corners quicker than ever."
      />
      <Redcarcontainer>
        <RedcardataBox>
          <Text
            title="Responsive Performance"
            descr="Staggered, performance-focused wheels and tires keep the car 
            planted and transfer even more power down to the road."
          />
          <Imagee img="./images/red1.jpg" />
          <Imagee img="./images/red2.jpg" />
          <Text
            title="Optimized Aerodynamics"
            descr="Attention to detail on all exterior surfaces makes
             Model S the most aerodynamic production car on Earth."
          />
          <Text
            title="Refined Styling"
            descr="Exterior design combines an iconic look with elegant proportions."
          />
          <Imagee img="./images/red3.jpg" />
        </RedcardataBox>
        <Respondatabox>
          <Imagee img="./images/red1.jpg" />
          <Text
            title="Responsive Performance"
            descr="Staggered, performance-focused wheels and tires keep the car 
            planted and transfer even more power down to the road."
          />
          <Imagee img="./images/red2.jpg" />
          <Text
            title="Optimized Aerodynamics"
            descr="Attention to detail on all exterior surfaces makes
             Model S the most aerodynamic production car on Earth."
          />
          <Imagee img="./images/red3.jpg" />
          <Text
            title="Refined Styling"
            descr="Exterior design combines an iconic look with elegant proportions."
          />
        </Respondatabox>
      </Redcarcontainer>
    </>
  );
};

export default Modelfunct;
const Container = styled.div`
  width: 100%;
  height: 75rem;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 100rem;
  }
`;
const Redcarcontainer = styled(Container)`
  height: 65rem;
`;
const Databox = styled.div`
  width: 80%;
  height: 90%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 260px);
  grid-auto-rows: 260px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RedcardataBox = styled(Databox)`
  height: 80%;
`;
const Respondatabox = styled(Databox)`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    display: block;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(2, 350px);
    grid-auto-rows: 350px;
  }
`;
export { Container, Databox, Redcarcontainer, RedcardataBox, Respondatabox };
