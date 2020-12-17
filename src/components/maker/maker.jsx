import Editor from "components/editor/editor";
import Preview from "components/preview/preview";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "./maker.module.css";

// const Maker = ({authService}) => {
//   const history = useHistory();
//   const onLogout = () => {
//     authService.logout();
//   };

//   useEffect(() => {
//     authService.onAuthChange(user => {
//       if (!user) {
//         history.push("/");
//       }
//     });
//   });
//   return (
//     <section className={styles.maker}>
//       <Header onLogout={onLogout} />
//       <Footer />
//     </section>
//   );
// };

// export default Maker;

const Maker = ({authService}) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "IYLIN",
      company: "instagram",
      theme: "dark",
      title: "frontend",
      email: "iylin@gmail.com",
      message: "I can do it",
      fileURL: "",
    },
    2: {
      id: 2,
      name: "IYLIN",
      company: "instagram",
      theme: "dark",
      title: "frontend",
      email: "iylin@gmail.com",
      message: "I can do it",
      fileURL: "",
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
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
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section>
      <Header onLogout={onLogout} />
      <div>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
