import Card from "components/Card/card";
import React from "react";

const Preview = ({cards}) => (
  <section>
    <h1>Preview</h1>
    <ul>
      {Object.keys(cards).map(key => {
        return <Card key={key} card={cards[key]} />;
      })}
    </ul>
  </section>
);

export default Preview;
