import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload"


const HomePage = props => {
  return (
    <div className="container">
      <div className="home-page h-100 row">
        <div className="col-3" />
        <div className="col-6 d-flex align-items-center">
          <div className="card home-container">
            <div id="welcome">
              Upload a PDF!
            </div>
            <Upload />
          </div>
        </div>
        <div className="col-3" />
      </div>
    </div>
  )
}

export default HomePage;
