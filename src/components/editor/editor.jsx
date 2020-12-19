import CardAddForm from "components/card_add_form/card_add_form";
import CardEditForm from "components/card_edit_form/card_edit_form";
import React from "react";
import styles from "./editor.module.css";

const Editor = ({cards, addCard, updateCard, deleteCard, ImageFileInput}) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map(key => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
        ImageFileInput={ImageFileInput}
      />
    ))}
    <CardAddForm onAdd={addCard} ImageFileInput={ImageFileInput}/>
  </section>
);

export default Editor;
