import React from "react";
import "./SearchContainer.css";

const SearchContainer = ({ searchInput, onSearhHandler, onSubmitHandler }) => {
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };
  return (
    <div className="inputSearch">
      <input
        value={searchInput}
        onChange={onSearhHandler}
        onKeyPress={(e) => onSubmit(e)}
        className="input"
        type="text"
        placeholder="Type to Search"
      />
    </div>
  );
};

export default SearchContainer;
