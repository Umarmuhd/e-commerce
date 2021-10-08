import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import Navigation from "../components/Navigation";

import { CartState } from "../context";

import location from "../assets/images/location-marker.svg";
import orders from "../assets/images/package.svg";
import mycart from "../assets/images/cart.svg";

import categories from "../assets/images/category.svg";
import popular from "../assets/images/popular.svg";
import recommended from "../assets/images/recommended.svg";
import shop from "../assets/images/shops.svg";

import product from "../assets/images/product-1.png";

import "./Home.css";

export default function Home() {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const {
    state: { cart },
    productDispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <>
      <div className="home">
        <div className="container navbar">
          <nav className="main-nav flex">
            <Link to="/" className="logo">
              <h1 className="base">Trollbasket</h1>
            </Link>

            <ul className="right-menu flex">
              <li>
                <Link to="/" className="flex">
                  <span className="around-img">
                    <img src={location} alt="location" />
                  </span>
                  <span className="sm">Lagos</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex">
                  <span className="around-img">
                    <img src={orders} alt="my orders" />
                  </span>
                  <span className="sm">My Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/view-cart" className="flex">
                  <span className="around-img cart">
                    <span className="xs">{cart.length}</span>
                    <img src={mycart} alt="my cart" />
                  </span>
                  <span className="sm">Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
          <form className="relative">
            <input
              type="text"
              placeholder="Search merchbuy"
              className="w-full"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </form>
        </div>
        <div className="showcase">
          <div className="container">
            <Carousel>
              <div className="relative item item-1">
                <div className="flex">
                  <h2>
                    Having any <span>issues</span> with your order?{" "}
                  </h2>
                  <Link to="/" className="xs">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative item item-2 mid">
                <div className="flex">
                  <h2>
                    Having any <span>issues</span> with your order?{" "}
                  </h2>
                  <Link to="/" className="xs">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relativ item item-3"></div>
            </Carousel>
          </div>
        </div>
        <div className="categories">
          <div className="container">
            <div className="items flex">
              <div className="item">
                <img src={categories} alt="..." />
                <h4 className="xs text-center font-normal">
                  Product categories
                </h4>
              </div>
              <div className="item">
                <img src={popular} alt="..." />
                <h4 className="xs text-center font-normal">Popular Products</h4>
              </div>
              <div className="item">
                <img src={recommended} alt="..." />
                <h4 className="xs text-center font-normal">
                  Recommended Products
                </h4>
              </div>
              <div className="item">
                <img src={shop} alt="..." />
                <h4 className="xs text-center font-normal">Shops</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="products-list">
          {" "}
          <div className="container">
            <div className="products">
              {transformProducts().map((product) => (
                <Link key={product.id} to={"/view-product/" + product.id}>
                  <div className="product-item">
                    <img src={product.image} alt="..." />
                    <h3 className="name xs text-grey font-normal">
                      {product.name}
                    </h3>
                    <p className="price font-bold">₦{product.price}</p>
                    <p className="qnty xs">{product.inStock} (in stock)</p>
                  </div>
                </Link>
              ))}
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
        <div className="relative">
          <Navigation />
        </div>
      </div>
    </>
  );
}
