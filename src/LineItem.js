import React from "react";
import { BsTrash } from "react-icons/bs";

const LineItem = ({ item, handleChange, handleClick }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      ></input>
      <label
        onDoubleClick={() => handleChange(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <BsTrash
        role="button"
        tabIndex="0"
        onClick={() => handleClick(item.id)}
      />
    </li>
  );
};

export default LineItem;
