import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/Users/waghmode/Desktop/Omkar/Digitalflake/my-app/src/Componenets/Login.js";
import Home from "/Users/waghmode/Desktop/Omkar/Digitalflake/my-app/src/Componenets/Home.js";
import Navbar from "./Componenets/Navbar";
import Product from "./Componenets/Product";
import Category from "./Componenets/Category";
import Addprod from "./Componenets/Addprod";
import Signup from "./Componenets/Signup";
import AddCat from "./Componenets/AddCat";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let initprod;
  if (localStorage.getItem("prod") === null) {
    initprod = [];
  } else {
    initprod = JSON.parse(localStorage.getItem("prod"));
  }

  const onDelete = (prd) => {
    console.log("I am on delete", prd);
    setProd(
      prod.filter((e) => {
        return e !== prd;
      })
    );

    localStorage.setItem("prod", JSON.stringify(prod));
  };

  const addprod = (title, cat, Status) => {
    console.log("I am adding ", title, cat, Status);
    let ID;
    if (prod.length == 0) {
      ID = 0;
    } else {
      ID = prod[prod.length - 1].ID + 1;
    }
    const myprod = {
      ID: ID,
      title: title,
      Cat: cat,
      Status: Status,
    };
    setProd([...prod, myprod]);
    console.log(myprod);

    // if (localStorage.getItem("prod")) {

    // }
  };

  const [prod, setProd] = useState(initprod);
  useEffect(() => {
    localStorage.setItem("prod", JSON.stringify(prod));
  }, [prod]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Product"
            element={<Product prod={prod} onDelete={onDelete} />}
          />
          <Route path="/Category" element={<Category prod={prod} />} />
          <Route path="/Addprod" element={<Addprod addprod={addprod} />} />
          <Route path="/AddCat" element={<AddCat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
