import { CHANGE_USER_NAME } from "./type";

const initialState = {
  name: null,
  age: 56,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_NAME:
      return {
        ...state,
        name: payload,
      };
    default:
      return initialState;
  }
};

export default reducer;
