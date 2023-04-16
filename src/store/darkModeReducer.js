const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const toggleDarkMode = (event) => async (dispatch) => {
  localStorage.setItem("darkmode", event);
  dispatch({
    type: TOGGLE_DARK_MODE,
    payload: event,
  });
};

const initialState = {
  isDarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: action.payload };
    default:
      return state;
  }
};
