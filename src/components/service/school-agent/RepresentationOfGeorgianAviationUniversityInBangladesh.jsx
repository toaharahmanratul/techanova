import React from "react";
import styles from "./school-agent.module.css";

const RepresentationOfGeorgianAviationUniversityInBangladesh = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.bannerImageDiv}`}>
        <img
          className={`${styles.bannerImage}`}
          src="/images/training_program_2.jpg"
          alt=""
        />
      </div>
      <div className={`${styles.showRoute}`}>
        <h3>
          Our Services <span className={`${styles.primaryColor}`}>/</span>{" "}
          Representation of Georgian Aviation University in Bangladesh
        </h3>
      </div>
      <div className={`${styles.serviceHeading}`}>
        <h1>Representation of Georgian Aviation University in Bangladesh</h1>
      </div>
      <section className={`${styles.serviceContent}`}>
        <div className={`${styles.serviceContentLeft}`}>
          <p>
            Techinnova represents Georgian Aviation University (GAU) in
            Bangladesh aims to facilitate the admission process for students
            interested in pursuing diploma in pilot training and engineering
            (AME), as well as other undergraduate, graduate, and postgraduate
            programs offered by GAU.
          </p>{" "}
          <br />
          <img src="/images/service_1_content_pic_3.jpg" alt="" />
          <p>
            We will assist you to be a key player in aviation sector through
            developing software to ensure safe, efficient, and sustainable
            aviation operations in the country. We can help you to develop
            software related with Regulatory Compliance and Reporting, Aviation
            Document processing, Safety Management Systems (SMS), Maintenance,
            Repair, scheduling inspections, tracking component health, and
            managing inventory, Training database for aviation professionals,
            Environmental Monitoring and Compliance, airport management, slot
            management, etc.
          </p>
        </div>
        <div className={`${styles.serviceContentright}`}>
          <img src="/images/service_1_content_pic_1.jpg" alt="" />
          <img src="/images/service_1_content_pic_2.jpg" alt="" />
          <br />
          <h2>Elevating Aviation Safety</h2>
          <img src="/images/service_1_content_pic_4.jpg" alt="" />
          <p>
            At the forefront of aviation safety and compliance, our firm
            specializes in offering comprehensive training programs essential
            for personnel involved in various aspects of aviation operations.
            From Dangerous Goods handling to Aviation Security protocols, Ground
            Handling procedures, Initial Cabin Safety training, Load Control
            techniques, and beyond, we provide tailored courses designed to meet
            industry standards and regulatory requirements.
          </p>
        </div>
      </section>
      <div className={`${styles.sectionHeading2}`}>
        <h1>Be a Pilot</h1>
      </div>
      <section className={`${styles.sectionContent2}`}>
        <h2>Be a pilot and fly globally, no slavery contract</h2>
        <img src="/images/service_1_section_2_pic_1.jpg" alt="" />
        <p>
          Georgian Aviation University offers Aircraft Flight Exploitation
          (CPL-A) course to the students from Bangladesh with a reasonable
          course fee. Any student can grab this opportunity. Its One and half
          years course and after completion students will be awarded with
          qualification of Higher professional qualification in Aircraft Flight
          Exploitation (CPL-A).{" "}
        </p>{" "}
        <br /> <br />
        <h2>
          The Door is open for all students, no science background is required
        </h2>{" "}
        <br />
        <p>
          After completing the course students will be highly qualified and
          competitive personnel for international market, because it meets the
          requirements of the Georgian Civil Aviation Agency and EASA (European
          Aviation Safety Agency).
        </p>
      </section>

      <div className={`${styles.sectionHeading3}`}>
        <h1>Be an Aircraft Maintenance Engineer</h1>
      </div>
      <section className={`${styles.sectionContent3}`}>
        <p>
          Train maintenance specialists relevant to European Aviation Safety
          Agency (EASA) standards. After completion of the program students will
          be aviation specialist as well as competitive for international
          markets.
        </p>
        <img src="/images/service_1_section_3_pic_1.jpg" alt="Picture" />
        <div className={`${styles.leftAligned}`}>
          <p>
            Students shall assure aircraft maintenance with one of the two
            bellow listed directions:
          </p>
          <p>
            B1.1 – maintenance of structural elements, equipment, systems and
            powerplant of an aircraft;
          </p>
          <p>
            B2 – maintenance of aircraft instruments, avionics and electrical
            systems of an aircraft.
          </p>
        </div>
      </section>

      <div className={`${styles.sectionHeading3}`}>
        <h1>Complete your Bachelor, Masters studies in Georgia</h1>
      </div>
      <section className={`${styles.sectionContent4}`}>
        <div className={`${styles.subSection}`}>
          <h2>Bachelor Program</h2>
          <p>The Faculty of Business Administration</p>
          <ul>
            <li>Air Transport Management</li>
          </ul>
        </div>
        <div className={`${styles.subSection}`}>
          <h2>Masters Program</h2>
          <p>The Faculty of Business Administration</p>
          <ul>
            <li>
              Master of Business Administration in Air Transport Management
           </li>
          </ul>
        </div>
      </section>

      <div className={`${styles.sectionHeading5}`}>
        <h1>How Techinnova Works:</h1>
      </div>
      <section className={`${styles.sectionContent5}`}>

      </section>
    </div>
  );
};

export default RepresentationOfGeorgianAviationUniversityInBangladesh;
