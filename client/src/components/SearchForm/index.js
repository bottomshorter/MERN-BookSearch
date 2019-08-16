import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input style={{ textAlign: "center" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book, Author, or Topic"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-warning">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
