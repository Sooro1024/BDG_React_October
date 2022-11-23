import React from "react";

export const TodoColoum = ({ title, children }) => {
  return (
    <div className="column">
      <p>{title}</p>
      <ul>{children}</ul>
    </div>
  );
};
