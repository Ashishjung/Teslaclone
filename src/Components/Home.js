import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Section
        name="Model S"
        description="Order Online for Touchless Delivery"
        Lbutnname="Custom Order"
        bgimage="model-s.jpg"
        Rbutname="Existing Inventory"
        downarr="./images/down-arrow.svg"
      />
      <Section
        name="Model Y"
        description="Order Online for Touchless Delivery"
        Lbutnname="Custom Order"
        bgimage="model-y.jpg"
        Rbutname="Existing Inventory"
      />
      <Section
        name="Model 3"
        description="Order Online for Touchless Delivery"
        Lbutnname="Custom Order"
        bgimage="model-3.jpg"
        Rbutname="Existing Inventory"
      />
      <Section
        name="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        Lbutnname="Custom Order"
        bgimage="solar-panel.jpg"
        Rbutname="Learn More"
      />
      <Section
        name="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        Lbutnname="Custom Order"
        bgimage="solar-roof.jpg"
        Rbutname="Learn More"
      />
      <Section
        name="Accessories"
        Lbutnname="Shop now"
        isbtn
       bgimage="accessories.jpg"
      />
    </div>
  );
};

export default Home;
