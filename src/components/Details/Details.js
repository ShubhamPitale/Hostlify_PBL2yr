import React from "react";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const Details = (props) => {
  return (
    <div>
      <HeroSection hostel={props.hostel} />
      <AboutSection hostel={props.hostel} />
    </div>
  );
};

export default Details;
