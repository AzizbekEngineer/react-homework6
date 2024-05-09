import React from "react";
import productImg1 from "../../assets/img/product1.svg";
import "./information.scss";

const Information = () => {
  return (
    <section className="information container">
      <div className="information__left">
        <h2 className="information__title">Subscribe To Newsletter</h2>
        <p className="information__desc">
          Get free guide about smart watches daily.
        </p>
        <form className="information__form">
          <input type="text" placeholder="Enter Email Address" />
          <button className="information__btn">Subscribe</button>
        </form>
      </div>
      <div className="information__left">
        <img src={productImg1} alt="" />
      </div>
    </section>
  );
};

export default Information;
