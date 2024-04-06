import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Addprod = ({ addprod }) => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [Status, setStatus] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!title || !cat) {
      alert("Title or Decription cannot be blank");
    }
    console.log(Status);
    addprod(title, cat, Status);
  };

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
              >
                <ul className="navbar-nav mb-2 mb-lg-0"></ul>
              </div>
            </div>
          </nav>
          <h1>Add New Product</h1>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="Cat" className="form-label">
                Category
              </label>
            </div>
            <div className="mb-3">
              <select>
                <option>Electronics</option>
                <option>Sports</option>
                <option>Luguage</option>
                <option>Automobile</option>
              </select>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <p></p>
            </div>
            <div className="mb-3">
              <label htmlFor="Cat" className="form-label">
                Price
              </label>
              <input type="text" className="form-control" id="Cat" />
              <label htmlFor="Cat" className="form-label">
                Status
              </label>
            </div>
            <div className="mb-3">
              <select value="Status">
                <option
                  value="Active"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  Active
                </option>
                <option
                  value="Inactive"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  InActive
                </option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Add New
            </button>
            <button
              type="button"
              class="btn btn-secondary my-3"
              onClick={() => {
                navigate(`/Product`);
              }}
            >
              Back
            </button>
          </form>
        </div>

      </div>
    </div>

  
  );
};

export default Addprod;
