import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CartState } from "../context";

import Collapsible from "../components/Collapsible";
import ReviewItem from "../components/ReviewItem";

import caret from "../assets/images/caret-back.svg";
import search from "../assets/images/search.svg";
import mycart from "../assets/images/cart.svg";

import "./ViewProduct.css";

export default function ViewProduct() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const {
    state: { products },
  } = CartState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  let { id } = useParams();

  console.log(cart);

  useEffect(() => {
    setLoading(true);
    try {
      let product = products.find((prod) => prod.id === id);
      setProduct(product);
    } catch (error) {}

    setLoading(false);
  }, [id, products]);

  return (
    <>
      <div className="view-product">
        <div className="container navbar">
          <nav className="other-nav flex py-1">
            <Link to="/" className="go-back">
              <img src={caret} alt="go back" />
            </Link>

            <Link to="/">
              <h1 className="sm">Details</h1>
            </Link>

            <ul className="right-menu flex">
              <li className="search">
                <Link to="#search">
                  <img src={search} alt="search here" />
                </Link>
              </li>
              <li className="cart">
                <Link to="/view-cart">
                  <span className="around-img">
                    <span className="xs">{cart.length}</span>
                    <img src={mycart} alt="my cart" />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="container">
              <div className="product-img w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full"
                />
              </div>

              <div className="short-desc">
                <h2 className="name base font-normal">{product.name}</h2>
                <p className="desc text-grey sm">
                  Get comfy and comfortable with the new 2019 designer sneaker
                  for all your events
                </p>

                <h3 className="price text-black font-bold">N{product.price}</h3>
              </div>
              <div className="full-desc">
                <Collapsible summary="Product Description">
                  <p>Super cool!</p>
                </Collapsible>
              </div>
              <div className="ratings-review py-4">
                <p className="flex">
                  <span className="sm">Review and Ratings</span>
                  <span className="view-all text-primary sm">View all</span>
                </p>
                <ReviewItem ratings={product.ratings} />
              </div>
            </div>
            <div className="container">
              <div className="btn-holder flex">
                {cart.some((p) => p.id === product.id) ? (
                  <button
                    className="add-to-cart font-medium"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="add-to-cart font-medium"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      })
                    }
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? "Out of Stock" : "Add to cart"}
                  </button>
                )}
                <button className="add-wishlist font-medium">Wishlist</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
