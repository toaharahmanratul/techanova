import React from "react";
import styles from "./sliding-nav.module.css";
import { TfiClose } from "react-icons/tfi";

const SlidingNav = ({ isSlidingNavOpen, setIsSlidingNavOpen }) => {
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
      </div>
    </div>
  );
};

export default SlidingNav;
