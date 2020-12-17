import CardAddForm from "components/card_add_form/card_add_form";
import CardEditForm from "components/card_edit_form/card_edit_form";
import React from "react";

const Editor = ({cards, addCard, updateCard, deleteCard}) => (
  <section>
    <h1>Card Maker</h1>
    {Object.keys(cards).map(key => (
      <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>
    ))}
    <CardAddForm onAdd={addCard}/>
  </section>
);

export default Editor;
