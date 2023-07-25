import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const AddItem = ({ setNewItem, newItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <AiFillPlusCircle />
      </button>
    </form>
  );
};
export default AddItem;
