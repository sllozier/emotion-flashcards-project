import axios from "axios";

const SET_CARDS = "SET_CARDS";

export const setCards = (data) => {
  return {
    type: SET_CARDS,
    cards: data,
  };
};

export const fetchAllCards = () => {
  return async (dispatch) => {
    try {
      const cards = await axios.get("/api/cards");
      dispatch(setCards(cards.data));
    } catch (error) {
      console.log("FETCH CAMPUS THUNK ERROR: ", error);
    }
  };
};

export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    default:
      return state;
  }
};
