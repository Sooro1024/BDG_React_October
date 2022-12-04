import React from "react";
import { Provider } from "react-redux";
import { TodosCont } from "./containers/TodosCont";
import { UserCont } from "./containers/UserCont";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UserCont />
      <TodosCont />
    </Provider>
  );
};

export default App;
