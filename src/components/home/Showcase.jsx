import React from "react";
import styles from "./styles/showcase.module.css";

const Showcase = () => {
  return (
    <div className={`${styles.showcaseDiv}`}>
      <div className={`${styles.showcase}`}>
        <div className={`${styles.showcaseGrid}`}>
          <h1>Easier Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            impedit voluptates. Ex illo, neque facere incidunt, eligendi dolor
            quisquam minus dolorem, perferendis eos exercitationem officiis
            soluta maxime rerum cupiditate quis.
          </p>
        </div>
        <div className={`${styles.showcaseCard}`}>
          <h4>Message</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            harum nulla illum, possimus reprehenderit hic repellendus
            necessitatibus? Eos, atque quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
