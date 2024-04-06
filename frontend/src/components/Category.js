import React from "react";
import Navbar from "./Navbar";
import Categoryitem from "./Categoryitem";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const navigate = useNavigate();
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
          <h1>Category</h1>
          <table className="table caption-top">
            <thead>
              <tr>
                <th>ID</th>
                <br />
                <th>Title</th>
                <br />
                <th>Category</th>
                <br />
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.prod.map((prod) => {
                return <Categoryitem prd={prod} key={prod.ID} />;
              })}
            </tbody>
          </table>
        </div>
        <div>{/* <Navbar /> */}</div>
      </div>
    </div>
  );
}

export default Category;
