import Editor from "components/editor/editor";
import Preview from "components/preview/preview";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "./maker.module.css";

const Maker = ({authService, ImageFileInput, cardRepository}) => {
  const historyState = useHistory.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          ImageFileInput={ImageFileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
