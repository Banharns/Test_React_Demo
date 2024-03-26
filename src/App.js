import React, { useState } from "react";
import "./App.css";
import Grid from "./component/Grid";
import Filter from "./component/Filter";
import { Link } from "react-router-dom";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="main">
      <div className="button">
        <Link to={"/create"}>
          {" "}
          <button className="button_add">เพิ่มผลไม้</button>
        </Link>
      </div>

      <Filter onChange={handleFilterChange} />
      <Grid filter={filter} />
    </div>
  );
}

export default App;
