import {fbase} from "service/fbase";

class CardRepository {
  syncCard(userId, onUpdate) {
    const ref = fbase.database().ref(`${userId}/cards`);
    ref.on("value", snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => ref.off();
  }

  saveCard(userId, card) {
    fbase.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    fbase.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
