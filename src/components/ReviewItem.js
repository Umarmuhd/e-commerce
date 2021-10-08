import React from "react";

import starfull from "../assets/images/star-full.svg";
import starnull from "../assets/images/star-null.svg";
import user from "../assets/images/user.png";

export default function ReviewItem({ ratings }) {
  return (
    <div className="review-item">
      <div className="flex rates">
        <div className="flex stars">
          <img src={starfull} alt="..." />
          <img src={starfull} alt="..." />
          <img src={starfull} alt="..." />
          <img src={starfull} alt="..." />
          <img src={starnull} alt="..." />
        </div>
        <p className="sm font-medium">{ratings && ratings.toFixed(1)}</p>
      </div>
      <p className="review-text sm text-grey">
        This is the best product I have used in a long while and the size fits
        perfectly and I love the colors!!!!!
      </p>
      <div className="flex name-image">
        <img src={user} alt="..." />{" "}
        <span className="name sm">Segun Arinze</span>
      </div>
    </div>
  );
}
