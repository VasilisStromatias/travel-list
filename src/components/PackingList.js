import React, { useState } from "react";

import Item from "../components/Item";

function PackingList({ items, handleDeleteItem, handleCheckbox, clearList }) {
  const [orderBy, setOrderBy] = useState("input");

  const handleOrder = (e) => {
    setOrderBy(e.target.value);
  };

  let sortedItems;

  if (orderBy === "input") sortedItems = items;

  if (orderBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (orderBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={orderBy} onChange={handleOrder}>
          <option value="input">Order by input</option>
          <option value="description">Order by description</option>
          <option value="packed">Order by packed status</option>
        </select>
        <button onClick={() => clearList()}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
