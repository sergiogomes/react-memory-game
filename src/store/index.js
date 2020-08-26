import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  cards: [
    { id: 1, key: 1, name: "Card One", isActive: false, hasMatch: false },
    { id: 1, key: 2, name: "Card One", isActive: false, hasMatch: false },
    { id: 2, key: 3, name: "Card Two", isActive: false, hasMatch: false },
    { id: 2, key: 4, name: "Card Two", isActive: false, hasMatch: false },
    { id: 3, key: 5, name: "Card Three", isActive: false, hasMatch: false },
    { id: 3, key: 6, name: "Card Three", isActive: false, hasMatch: false },
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      const cards = state.cards.slice();
      const index = cards.findIndex((c) => c.key === action.key);
      const otherCardIndex = cards.findIndex((c) => c.isActive && !c.hasMatch);

      if (index > -1) {
        if (cards[index].isActive) return state;

        if (otherCardIndex > -1) {
          if (cards[index].id === cards[otherCardIndex].id) {
            cards[index].isActive = true;
            cards[index].hasMatch = true;
            cards[otherCardIndex].hasMatch = true;
          } else {
            cards[otherCardIndex].isActive = false;
          }
        } else {
          cards[index].isActive = true;
        }
      }

      return {
        ...state,
        cards,
      };
    default:
      return state;
  }
};

const store = createStore(gameReducer, composeWithDevTools());

export default store;
