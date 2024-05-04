import React, { useState } from "react";
import styles from "./sliding-nav.module.css";
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const SlidingNav = ({ isSlidingNavOpen, setIsSlidingNavOpen }) => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);

  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsSlidingNavOpen(!isSlidingNavOpen);
    }
  };

  return (
    <div className={styles["sliding-nav-section"]} onClick={handleCloseMenu}>
      <div className={styles["menu-container"]}>
        <div className={styles["menu-wrapper"]}>
          <div className={styles["menu"]}>
            <h2>MENU</h2>
            <TfiClose onClick={() => setIsSlidingNavOpen(!isSlidingNavOpen)} />
          </div>
        </div>
        <div className={styles["menu-item"]}>
          <Link href="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div className={styles["menu-item"]}>
          <div className={styles["menu-content"]}>
            <Link href="/services">
              <h3>Our Services</h3>
            </Link>
            {!isServiceDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              >
                <IoIosArrowDown />
              </div>
            )}
            {isServiceDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              >
                <IoIosArrowUp />
              </div>
            )}
          </div>
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link href="/services/representation-of-georgian-aviation-university-in-bangladesh">
                <h3>
                  Representation of Georgian Aviation University in Bangladesh
                </h3>
              </Link>
            </div>
          )}
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link href="/services/aviation-software-developer">
                <h3>Aviation Software Development</h3>
              </Link>
            </div>
          )}
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link href="/services/aviation-training-provider">
                <h3>Aviation Training Solution</h3>
              </Link>
            </div>
          )}
        </div>
        <div className={styles["menu-item"]}>
          <Link href="/career">
            <h3>Career</h3>
          </Link>
        </div>
        <div className={styles["menu-item"]}>
          <Link href="/about">
            <h3>About</h3>
          </Link>
        </div>
        <div className={styles["menu-item"]}>
          <Link href="/login">
            <h3>Login</h3>
          </Link>
        </div>
        <div className={styles["menu-item"]}>
          <Link href="/register">
            <h3>Register</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlidingNav;
