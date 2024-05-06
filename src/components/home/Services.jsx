import React from "react";
import styles from "./styles/services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1>OUR SERVICES</h1>
      <div className={`${styles.cardDiv}`}>
        <Link
          href="/services/representation-of-georgian-aviation-university-in-bangladesh"
          className={`${styles.card}`}
        >
          <img src="/images/legislation.jpg" alt="" />
          <h2>Representation of Georgian Aviation University in Bangladesh</h2>
        </Link>
        <Link
          href="/services/aviation-software-developer"
          className={`${styles.card}`}
        >
          <img src="/images/organization.jpg" alt="" />
          <h2>Aviation Software Development</h2>
        </Link>
        <Link
          href="/services/aviation-training-provider"
          className={`${styles.card}`}
        >
          <img src="/images/personnel_lincensing.jpg" alt="" />
          <h2>Aviation Training Solution</h2>
        </Link>
      </div>
    </div>
  );
};

export default Services;
