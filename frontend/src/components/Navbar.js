import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="sidebar" id="side_nav">
      <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
        <h1 className="fs-4">
          <span className="bg-white text-dark rounded shadow px-2 me-2 ">
            Digital Flake
          </span>
        </h1>
        <button className="btn d-md-none d-block close-btn px-1 py-0 text-white">
          <i className="fal fa-stream"></i>
        </button>
      </div>

      <ul className="list-unstyled px-2">
        <li classNameName="">
          <a
            href="/Category"
            className="text-decoration-none px-3 py-2 d-block"
          >
            <i className="fal fa-home"></i> Category
          </a>
        </li>
        <li className="">
          <a href="/Product" className="text-decoration-none px-3 py-2 d-block">
            <i className="fal fa-list"></i>
            Products
          </a>
        </li>
      </ul>
      <hr className="h-color mx-2" />
    </div>
  );
}

export default Navbar;
