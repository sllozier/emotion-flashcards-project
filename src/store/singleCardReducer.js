import axios from "axios";

const SET_CARD = "SET_CARD";

export const setCard = (card) => {
  return {
    type: SET_CARD,
    card,
  };
};

export const fetchOneCard = (cardId) => {
  return async (dispatch) => {
    try {
      const { data: card } = await axios.get(`/api/cards/${cardId}`);
      dispatch(setCard(card));
    } catch (error) {
      console.log("FETCH CAMPUS THUNK ERROR: ", error);
    }
  };
};

export const singleCardReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CARD:
      return action.card;
    default:
      return state;
  }
};
