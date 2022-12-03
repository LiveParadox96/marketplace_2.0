import "./SearchBar";
import React from "react";

function SearchBar({ input, setInput }) {
  return (
    <input
      className="Input_item" style={{width: "400px", height: "30px"}}
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      name="email"
      id="email"
    />
  );
}

export default SearchBar;
