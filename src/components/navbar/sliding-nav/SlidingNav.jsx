import React, { useState } from "react";
import styles from "./sliding-nav.module.css";
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const SlidingNav = ({
  isSlidingNavOpen,
  setIsSlidingNavOpen,
  handleLogoutClick,
}) => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsSlidingNavOpen(!isSlidingNavOpen);
    }
  };
  const handleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
    setIsCareerDropdownOpen(false);
  };
  const handleCareerDropdown = () => {
    setIsCareerDropdownOpen(!isCareerDropdownOpen);
    setIsServiceDropdownOpen(false);
  };
  const handleLinkClick = () => {
    setIsSlidingNavOpen(!isSlidingNavOpen);
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
          <Link href="/" onClick={handleLinkClick}>
            <h3>Home</h3>
          </Link>
        </div>
        {sessionStatus === "authenticated" && (
          <div className={styles["menu-item"]}>
            <Link href={`/user/dashboard`} onClick={handleLinkClick}>
              <h3>Dashboard</h3>
            </Link>
          </div>
        )}
        <div className={styles["menu-item"]}>
          <div className={styles["menu-content"]}>
            <Link href="/services" onClick={handleLinkClick}>
              <h3>Our Services</h3>
            </Link>
            {!isServiceDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={handleServiceDropdown}
              >
                <IoIosArrowDown />
              </div>
            )}
            {isServiceDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={handleServiceDropdown}
              >
                <IoIosArrowUp />
              </div>
            )}
          </div>
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link
                href="/services/representation-of-georgian-aviation-university-in-bangladesh"
                onClick={handleLinkClick}
              >
                <h3>
                  Representation of Georgian Aviation University in Bangladesh
                </h3>
              </Link>
            </div>
          )}
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link
                href="/services/aviation-software-development"
                onClick={handleLinkClick}
              >
                <h3>Aviation Software Development</h3>
              </Link>
            </div>
          )}
          {isServiceDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link
                href="/services/aviation-training-solution"
                onClick={handleLinkClick}
              >
                <h3>Aviation Training Solution</h3>
              </Link>
            </div>
          )}
        </div>

        {/* Career */}
        <div className={styles["menu-item"]}>
          <div className={styles["menu-content"]}>
            <Link href="/career" onClick={handleLinkClick}>
              <h3>Career</h3>
            </Link>
            {!isCareerDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={handleCareerDropdown}
              >
                <IoIosArrowDown />
              </div>
            )}
            {isCareerDropdownOpen && (
              <div
                className={styles["dropdown-arrow"]}
                onClick={handleCareerDropdown}
              >
                <IoIosArrowUp />
              </div>
            )}
          </div>
          {isCareerDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link href="/career/vacancies" onClick={handleLinkClick}>
                <h3>Vacancies</h3>
              </Link>
            </div>
          )}
          {isCareerDropdownOpen && (
            <div className={styles["menu-sub-content"]}>
              <Link href="/career/apply-now" onClick={handleLinkClick}>
                <h3>Apply Now</h3>
              </Link>
            </div>
          )}
        </div>

        {/* About */}
        <div className={styles["menu-item"]}>
          <Link href="/about" onClick={handleLinkClick}>
            <h3>About</h3>
          </Link>
        </div>

        {sessionStatus !== "authenticated" && (
          <div className={styles["menu-item"]}>
            <Link href="/login" onClick={handleLinkClick}>
              <h3>Login</h3>
            </Link>
          </div>
        )}
        {sessionStatus !== "authenticated" && (
          <div className={styles["menu-item"]}>
            <Link href="/register" onClick={handleLinkClick}>
              <h3>Register</h3>
            </Link>
          </div>
        )}
        {sessionStatus === "authenticated" && (
          <div className={styles["last-item"]}>
            <button
              onClick={() => {
                handleLinkClick();
                handleLogoutClick();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidingNav;
