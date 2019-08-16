import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white" }}
      className="jumbotron"
    >
      <img src="../mern.png" alt="https://lakelandmom.com/wp-content/uploads/2018/02/Lakeland-Easter-Egg-Hunts.png" style={{ height: "300px" }} />
      <br />
      <p> A book searching web application built using the MERN stack and Google API.  </p>
      <p> Please search for a book below, after that you can press 'Save Book', or go to the Google Books link. </p>
    </div>
  );
}

export default Jumbotron;