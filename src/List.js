import React from "react";
import LineItem from "./LineItem";

const list = ({ items, handleChange, handleClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          handleChange={handleChange}
          handleClick={handleClick}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default list;
