import React from "react";

export const TodoColoum = ({ title, children }) => (
  <div className="column">
    <p>{title}</p>
    {children}
  </div>
);
