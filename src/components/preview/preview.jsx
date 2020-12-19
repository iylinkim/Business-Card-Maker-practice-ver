import Card from "components/card/card";
import React from "react";
import styles from "./preview.module.css";

const Preview = ({cards}) => (
  <section>
    <h1 className={styles.title}>Preview</h1>
    <ul className={styles.lists}>
      {Object.keys(cards).map(key => {
        return <Card key={key} card={cards[key]} />;
      })}
    </ul>
  </section>
);

export default Preview;
