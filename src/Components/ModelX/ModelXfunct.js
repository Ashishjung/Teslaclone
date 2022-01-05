import React from "react";
import Newinterior from "../ReuseComponent/Newinterior";
import Slider from "../ReuseComponent/Slider";
import {
  Redcarcontainer,
  RedcardataBox,
  Respondatabox,
  Container,
  Databox,
} from "../ReuseComponent/Modelfunct.js";
import Imagee from "../ReuseComponent/Modelsfunct/Imagee.js";
import Text from "../ReuseComponent/Modelsfunct/Text.js";
import Sblue from "../ReuseComponent/Modelsfunct/Sblue.js";
import Powertrain from "../ReuseComponent/Powertrain.js";
const ModelXfunct = () => {
  return (
    <>
      <Newinterior />
      <Slider />
      <Redcarcontainer>
        <RedcardataBox>
          <Text
            title="Game from Anywhere"
            descr="Up to 10 teraflops of processing power enables in-car gaming on-par
          with today’s newest consoles. Wireless controller compatibility lets
          you game from any seat."
          />
          <Imagee img="./images/game.jpg" />
          <Imagee img="./images/connected.jpg" />
          <Text
            title="Stay Connected"
            descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger,
           with enough power to fast-charge your tablets and laptop."
          />

          <Text
            title="Audio"
            descr="A 22-speaker, 960-watt audio system with Active Road Noise
           Reduction offers the best listening experience wherever you are."
          />
          <Imagee img="./images/audio.jpg" />
        </RedcardataBox>
        <Respondatabox>
          <Text
            title="Game from Anywhere"
            descr="Up to 10 teraflops of processing power enables in-car gaming on-par
          with today’s newest consoles. Wireless controller compatibility lets
          you game from any seat."
          />
          <Imagee img="./images/game.jpg" />
          <Text
            title="Stay Connected"
            descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger,
           with enough power to fast-charge your tablets and laptop."
          />
          <Imagee img="./images/connected.jpg" />
          <Text
            title="Audio"
            descr="A 22-speaker, 960-watt audio system with Active Road Noise
           Reduction offers the best listening experience wherever you are."
          />
          <Imagee img="./images/audio.jpg" />
        </Respondatabox>
      </Redcarcontainer>
      <Sblue
        img="./images/xbrown.webp"
        featureF="1,020 hp"
        StrengthF="Peak power"
        featureS="9.9s"
        StrengthS="1/4 mile"
        featureT="2.5s"
        StrengthT="0-60 mph*"
        name="Plaid"
        quality="Beyond Ludicrous"
        description="With the most power and quickest acceleration 
        of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains,
         with updated battery architecture, can deliver instant torque at any speed."
      />
      <Powertrain
        desc="Model X platforms unite powertrain and 
      battery technologies for unrivaled performance, range and efficiency. 
      New module and pack thermal 
      architecture allows faster charging and gives you more power and endurance in all conditions."
      />
    </>
  );
};

export default ModelXfunct;
