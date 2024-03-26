import React from "react";
import "./Filter.css";
function Filter({ onChange }) {
  return (
    <form className="nosubmit">
      <input
        className="nosubmit"
        type="search"
        placeholder="ค้นหาผลไม้"
        onChange={onChange}
      />
    </form>
  );
}

export default Filter;
