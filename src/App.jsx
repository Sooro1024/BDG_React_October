import React, { useState } from "react";
import { TodosCont } from "./containers/TodosCont";
import { UserCont } from "./containers/UserCont";
import { UserContext } from "./context/userName";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={userName}>
      <UserCont userName={userName} setUserName={setUserName} />
      <TodosCont />
    </UserContext.Provider>
  );
};

export default App;
