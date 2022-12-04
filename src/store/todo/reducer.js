import { SET_TODOS } from "./type";

const initialState = {
  todos: [],
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}

export default reducer;
