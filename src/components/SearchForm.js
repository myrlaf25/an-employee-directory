import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="card-text"
          placeholder="Search for Employee"
          id="search"
        />
        <p className="p"> e.g., name, email, birth year, or phone number. The search begins on input.</p>
        <button onClick={props.sortByName}>Sort Alphabetically</button>
      </div>
    </form>
  );
}

export default SearchForm;
