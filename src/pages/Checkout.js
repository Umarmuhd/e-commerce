import React from "react";
import { Link } from "react-router-dom";

import checkout from "../assets/images/checkout.svg";

import "./Checkout.css";

export default function Checkout() {
  return (
    <>
      <div className="checkout">
        <div className="main">
          <img src={checkout} alt="..." />
        </div>
        <div className="container">
          <Link to="/">
            <button className="md py-4 font-medium">Got It</button>
          </Link>
        </div>
      </div>
    </>
  );
}
