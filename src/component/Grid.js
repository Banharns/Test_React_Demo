import React, { useEffect, useState } from "react";
import "./Grid.css";
import Item from "./Item";

function Grid({ filter }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dotnet.meengineer.co.th/api/Account/GetFruitdata"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Grid;
