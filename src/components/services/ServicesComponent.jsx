import React from "react";
import Services from "../home/Services";
import styles from "./services-component.module.css";

const ServicesComponent = () => {
  return (
    <div className={styles["main-section"]}>
      <Services />
    </div>
  );
};

export default ServicesComponent;
