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
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
