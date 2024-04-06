import React from "react";

function ProductItem({ prd, onDelete }) {
  return (
    <div>
      <br />
      <p>Title</p>
      <h6>{prd.title}</h6>
      {/* <p>{prd.Pack}</p> */}
      <p>Category</p>
      <p>{prd.Cat}</p>
      <br />
      {/* <p>{prd.Price}</p> */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          onDelete(prd);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ProductItem;
