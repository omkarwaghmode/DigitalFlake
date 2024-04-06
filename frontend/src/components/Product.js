import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductItem from "./ProductItem";
import Addprod from "./Addprod";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const addprod = (title, cat) => {
    console.log("I am adding ", title, cat);
    let ID = props.prod.length + 1;
    const myprod = {
      ID: ID,
      title: title,
      Cat: cat,
    };
    console.log(myprod);
  };
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
                        navigate(`/Addprod`);
                      }}
                    >
                      Add new
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <h1>Product</h1>
          <table className="table caption-top">
            <thead>
              <tr>
                <th>ID</th>
                <br />
                <th>Title</th>
                <br />
                <th>Category</th>
                <br />
                <th>Price</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.prod.map((prod) => {
                return <ProductItem prd={prod} key={prod.ID} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
