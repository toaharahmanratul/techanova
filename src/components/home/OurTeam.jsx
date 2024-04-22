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
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/person.jpg" alt="" />
          <h2>Person 2</h2>
          <p>Designation</p>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/person.jpg" alt="" />
          <h2>Person 3</h2>
          <p>Designation</p>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/person.jpg" alt="" />
          <h2>Person 4</h2>
          <p>Designation</p>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/person.jpg" alt="" />
          <h2>Person 5</h2>
          <p>Designation</p>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
