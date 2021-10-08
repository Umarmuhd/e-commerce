import React from "react";
import { Link } from "react-router-dom";

import { CartState } from "../context";

import Collapsible from "../components/Collapsible";
import ReviewItem from "../components/ReviewItem";

import shoe from "../assets/images/shoe-img.png";
import caret from "../assets/images/caret-back.svg";
import search from "../assets/images/search.svg";
import cart from "../assets/images/cart.svg";

import "./ViewProduct.css";

export default function ViewProduct() {
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

            <ul class="right-menu flex">
              <li class="search">
                <Link to="#search">
                  <img src={search} alt="search here" />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img src={cart} alt="my cart" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div className="product-img w-full">
            <img src={shoe} alt="shoe" className="w-full" />
          </div>

          <div className="short-desc">
            <h2 className="name base font-normal">NIKE Huararche 2019</h2>
            <p className="desc text-grey sm">
              Get comfy and comfortable with the new 2019 designer sneaker for
              all your events
            </p>

            <h3 className="price text-black font-bold">N45,000 - N80,000</h3>
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
            <ReviewItem />
          </div>
        </div>
        <div className="container">
          <div className="btn-holder flex">
            <button className="add-to-cart font-medium">Add to cart</button>
            <button className="add-wishlist font-medium">Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
