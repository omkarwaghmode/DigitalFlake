import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div classNameName="container">
      <div className="main-container d-flex">
        <Navbar />
        <div className="content">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <h6 className="text-center">Digitalflake </h6>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              ></div>
            </div>
          </nav>
          <h1>Welcome to DigitalFlake</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
