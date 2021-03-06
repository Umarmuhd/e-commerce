import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context";

import "./Cart.css";

import caret from "../assets/images/caret-back.svg";
import trash from "../assets/images/trash.svg";
import product from "../assets/images/product-1.png";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);

  console.log(total, dispatch);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  console.log(cart);
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
              {cart.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="flex">
                    <img src={item.image} alt="..." />
                    <div className="details">
                      <h2 className="name sm font-normal">{item.name}</h2>
                      <p className="price sm font-bolder">N{item.price}</p>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="flex controls">
                    <button
                      className="delete flex"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <img src={trash} alt="delete" />
                      <span className="sm">Delete</span>
                    </button>
                    <div className="params flex">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: (item.qty -= 1),
                            },
                          })
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="font-medium"
                        min={1}
                        max={100}
                        value={item.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: parseInt(e.target.value, 10),
                            },
                          })
                        }
                      />
                      <button
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: (item.qty += 1),
                            },
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white">
          <div className="container">
            <div className="price-box py-1">
              <div>
                <p className="flex subtotal">
                  <span className="text sm">Subtotal</span>
                  <span className="price sm">N{total.toFixed(2)}</span>
                </p>
                <p className="flex total">
                  <span className="text sm">Total</span>
                  <span className="price font-bold sm">
                    N{total.toFixed(2)}
                  </span>
                </p>
              </div>
              <Link to="/checkout">
                <button type="submit" className="font-medium md py-4">
                  Checkout
                </button>
              </Link>
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
                  <p className="price font-bold">???900 - ???1,500</p>
                  <p className="qnty xs">MOQ 4 (pieces)</p>
                </div>
                <div className="product-item">
                  <img src={product} alt="..." />
                  <h3 className="name xs text-grey font-normal">
                    Free sample small tote bag gucci fen...
                  </h3>
                  <p className="price font-bold">???900 - ???1,500</p>
                  <p className="qnty xs">MOQ 4 (pieces)</p>
                </div>
                <div className="product-item">
                  <img src={product} alt="..." />
                  <h3 className="name xs text-grey font-normal">
                    Free sample small tote bag gucci fen...
                  </h3>
                  <p className="price font-bold">???900 - ???1,500</p>
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
