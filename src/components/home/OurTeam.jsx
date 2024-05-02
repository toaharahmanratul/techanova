import React from "react";
import styles from "./styles/our-team.module.css";
import Link from "next/link";

const OurTeam = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1>OUR TEAM</h1>
      <div className={`${styles.cardDiv}`}>
        <Link href="/ourteam/golam_rabbani" className={`${styles.card}`}>
          <img src="/images/golam_rabbani.jpg" alt="" />
          <h2>S M Golam Rabbani</h2>
          <p>Designation</p>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
