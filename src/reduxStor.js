import { createStore } from "redux";

/**
 * action = {type: string, payload?: any}
 */

const initialState = {
  user: {
    personalInfo: {
      name: null,
      age: 56,
    },
  },
  device: {
    os: "IOS",
    model: "Iphone6s",
  },
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case "SIGN_UP":
    //   return { ...state, userName: action.payload };
    // case "SIGN_OUT":
    //   return { ...state, userName: null };
    case "CHANGE_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          personalInfo: {
            ...state.user.personalInfo,
            name: payload,
          },
        },
      };
    default:
      return initialState;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
