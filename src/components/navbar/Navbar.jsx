import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import SlidingNav from "./sliding-nav/SlidingNav";
import { HiMenu } from "react-icons/hi";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isSlidingNavOpen, setIsSlidingNavOpen] = useState(false);
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.menuOptions}`}>
          <HiMenu onClick={() => setIsSlidingNavOpen(!isSlidingNavOpen)} />
        </div>
        {isSlidingNavOpen && (
          <div className={`${styles.slidingNavWrapper}`}>
            <SlidingNav
              isSlidingNavOpen={isSlidingNavOpen}
              setIsSlidingNavOpen={setIsSlidingNavOpen}
              handleLogoutClick={handleLogoutClick}
            />
          </div>
        )}
        <Link href="/" className={`${styles.logoDiv}`}>
          <div className={`${styles.logoTextDiv}`}>
            <h1 className="">Techanova</h1>
          </div>
        </Link>
        <ul className={`${styles.ul}`}>
          <li className={`${styles.li}`}>
            <Link href="/">Home</Link>
          </li>
          {sessionStatus === "authenticated" && (
            <li>
              <Link href="/user/dashboard">Dashboard</Link>
            </li>
          )}
          <li className={`${styles.li}`}>
            <Link href="/services">Our Services</Link>
            <div className={`${styles.dropdown}`}>
              <div className={`${styles.dropdownContent}`}>
                <Link href="/services/representation-of-georgian-aviation-university-in-bangladesh">
                  <p>
                    Representation of Georgian Aviation University in Bangladesh
                  </p>
                </Link>
                <Link href="/services/aviation-software-development">
                  <p>Aviation Software Development</p>
                </Link>
                <Link href="/services/aviation-training-solution">
                  <p>Aviation Training Solution</p>
                </Link>
              </div>
            </div>
          </li>
          <li className={`${styles.li}`}>
            <Link href="/career">Career</Link>
            <div className={`${styles.dropdown}`}>
              <div className={`${styles.dropdownContent}`}>
                <Link href="/home-link1">
                  <p>Vacancies</p>
                </Link>
                <Link href="/home-link2">
                  <p>Apply Now</p>
                </Link>
              </div>
            </div>
          </li>
          <li className={`${styles.li}`}>
            <Link href="/about">About</Link>
            <div className={`${styles.dropdown}`}>
              <div className={`${styles.dropdownContent}`}>
                <Link href="/home-link1">
                  <p>Overview</p>
                </Link>
                <Link href="/home-link2">
                  <p>Vision & Mission</p>
                </Link>
                <Link href="/home-link2">
                  <p>FAQ&apos;s</p>
                </Link>
                <Link href="/home-link2">
                  <p>Latest News and Highlights</p>
                </Link>
              </div>
            </div>
          </li>
          {sessionStatus !== "authenticated" && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {sessionStatus !== "authenticated" && (
            <li>
              <Link href="/register">Register</Link>
            </li>
          )}
          {sessionStatus === "authenticated" && (
            <li className={`${styles.li}`}>
              <Link href={`/user/dashboard`}>
                <img
                  className={`${styles.dp}`}
                  src={session?.user?.dpURL || "/images/default_DP.jpg"}
                  alt="Profile Picture"
                />
              </Link>
              <div className={`${styles.dropdown}`}>
                <div className={`${styles.dropdownContent}`}>
                  <Link href={`/user/dashboard`}>
                    <p>{`${session?.user?.name}`}</p>
                  </Link>
                </div>
              </div>
            </li>
          )}
          {sessionStatus === "authenticated" && (
            <li>
              <button
                className={`${styles.btnLogout}`}
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
