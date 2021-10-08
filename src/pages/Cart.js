import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

import caret from "../assets/images/caret-back.svg";
import coke from "../assets/images/coke.png";
import trash from "../assets/images/trash.svg";
import product from "../assets/images/product-1.png";

export default function Cart() {
  return (
    <>
      <div className="cart">
        <div className="bg-white navbar">
          {" "}
          <div className="container">
            <nav className="cart-nav flex py-1">
              <Link to="/" className="go-back">
                <img src={caret} alt="go back" />
              </Link>

              <Link to="/">
                <h1 className="base font-normal">Carts</h1>
              </Link>

              <div></div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="cart-content">
            <ul className="cart-items">
              <li className="cart-item">
                <div className="flex">
                  <img src={coke} alt="..." />
                  <div className="details">
                    <h2 className="name sm font-normal">
                      2019 Vintage Coca Cola
                    </h2>
                    <p className="price sm font-bolder">N18,099.09</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="flex controls">
                  <button className="delete flex">
                    <img src={trash} alt="delete" />
                    <span className="sm">Delete</span>
                  </button>
                  <div className="params flex">
                    <button>-</button>
                    <input
                      type="number"
                      className="font-medium"
                      min={1}
                      max={100}
                    />
                    <button>+</button>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="flex">
                  <img src={coke} alt="..." />
                  <div className="details">
                    <h2 className="name sm font-normal">
                      2019 Vintage Coca Cola
                    </h2>
                    <p className="price sm font-bolder">N18,099.09</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="flex controls">
                  <button className="delete flex">
                    <img src={trash} alt="delete" />
                    <span className="sm">Delete</span>
                  </button>
                  <div className="params flex">
                    <button>-</button>
                    <input
                      type="number"
                      className="font-medium"
                      min={0}
                      max={100}
                    />
                    <button>+</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white">
          <div className="container">
            <div className="price-box py-1">
              <div>
                <p className="flex subtotal">
                  <span className="text sm">Subtotal</span>
                  <span className="price sm">N18,099.09</span>
                </p>
                <p className="flex total">
                  <span className="text sm">Total</span>
                  <span className="price font-bold sm">N18,099.09</span>
                </p>
              </div>
              <button type="submit" className="font-medium md py-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white recently-viewed">
          <div className="container py-4">
            <div className=" w-full">
              <div className="flex">
                <p className="sm">Recently viewed</p>{" "}
                <span className="view-all sm text-primary">View all</span>
              </div>
              <div className="products">
                <div className="product-item">
                  <img src={product} alt="..." />
                  <h3 className="name xs text-grey font-normal">
                    Free sample small tote bag gucci fen...
                  </h3>
                  <p className="price font-bold">₦900 - ₦1,500</p>
                  <p className="qnty xs">MOQ 4 (pieces)</p>
                </div>
                <div className="product-item">
                  <img src={product} alt="..." />
                  <h3 className="name xs text-grey font-normal">
                    Free sample small tote bag gucci fen...
                  </h3>
                  <p className="price font-bold">₦900 - ₦1,500</p>
                  <p className="qnty xs">MOQ 4 (pieces)</p>
                </div>
                <div className="product-item">
                  <img src={product} alt="..." />
                  <h3 className="name xs text-grey font-normal">
                    Free sample small tote bag gucci fen...
                  </h3>
                  <p className="price font-bold">₦900 - ₦1,500</p>
                  <p className="qnty xs">MOQ 4 (pieces)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
