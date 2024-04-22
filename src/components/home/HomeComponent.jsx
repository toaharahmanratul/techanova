"use client";
import React from "react";
import styles from "./styles/home-component.module.css";
import OurTeam from "./OurTeam";
import Showcase from "./Showcase";
import Services from "./Services";

const HomeComponent = () => {
  return (
    <div>
      <div>
        <Showcase />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default HomeComponent;
