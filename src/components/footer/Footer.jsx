import React from "react";
import styles from "./styles/footer.module.css";
import { LiaCopyright } from "react-icons/lia";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.footerContentDiv}`}>
        <div className={`${styles.footerInfoDiv}`}>
          <h1>Techanova</h1>
          <p>
            <LiaCopyright /> Copyright. All rights reserved.
          </p>
        </div>
        <div className={`${styles.serviceDiv}`}>
          <h2>Services</h2>
          <p>Aviation School Agent</p>
          <p>Aviation Training Provider</p>
          <p>Aviation Software Development</p>
        </div>
        <div className={`${styles.socialDiv}`}>
          <h1>Follow Us</h1> <br />
          <div className={`${styles.linksDiv}`}>
            <Link href="#">
              <ImFacebook2 />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaInstagramSquare />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaSquareGooglePlus />
            </Link>
            <Link href="#">
              <PiGlobeBold />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
