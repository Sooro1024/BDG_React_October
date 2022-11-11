import React from "react";

const Heading = () => {
  return <h2></h2>;
};
export const HeaderComp = ({ children }) => {
  return (
    <div>
      {children}
      <div> </div>
    </div>
  );
};

export { Heading };
