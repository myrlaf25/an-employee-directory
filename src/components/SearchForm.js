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
        <p className="p"> Start you search by beginning to type the name of the employee, an email address, birth year, or phone number: e.g. (252)-808-8284. The app will begin your search automatically. </p>
      </div>
    </form>
  );
}

export default SearchForm;
