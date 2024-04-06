import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AddCat() {
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
    // addprod(title, cat, Status);
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
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button
                      type="button"
                      classNameName="btn btn-success"
                      onClick={() => {
                        navigate(`/AddCat`);
                      }}
                    >
                      Add new
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <h1>Add New Category</h1>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="Cat" className="form-label">
                Category
              </label>
              <input
                type="text"
                onChange={(e) => setCat(e.target.value)}
                className="form-control"
                value={cat}
                id="Cat"
              />

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
        <div>{/* <Navbar /> */}</div>
      </div>
    </div>
  );
}

export default AddCat;
