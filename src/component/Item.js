import React from "react";

function Item({ item }) {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={item.thumbnailUrl} alt={item.name} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{item.name}</h2>
        </div>
      </div>
    </li>
  );
}

export default Item;
