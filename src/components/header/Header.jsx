import React, { useState } from "react";
import logoNav from "../../assets/img/Logo.svg";
import { IoSearch, IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import "./header.scss";
import { headerItems } from "../../static";
import heroImg from "../../assets/img/hero.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="header">
      <nav className="navbar container df">
        <div className="header__logo">
          <img src={logoNav} alt="" />
        </div>
        <ul className="header__list df">
          {headerItems.map((item, indx) => (
            <li className="header__item" key={indx}>
              <a href="">{item}</a>
            </li>
          ))}
          <li className=" header__item__close">
            <a href="">x</a>
          </li>
        </ul>
        <div className="header__btns df">
          <IoSearch />
          <IoPersonSharp />
          <FaCartPlus />
          <div onClick={() => setShow(true)} className="header__btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {show ? (
        <div onClick={() => setShow(false)} className="overlay"></div>
      ) : (
        <></>
      )}
      <div className={`sidebar ${show ? "show" : ""}`}>
        <u className="sidebar__list">
          {headerItems.map((item, indx) => (
            <li className="sidebar__item" key={indx}>
              <a href="">{item}</a>
            </li>
          ))}
          <li className=" sidebar__item__close">
            <a onClick={() => setShow(false)} href="">
              x
            </a>
          </li>
        </u>
      </div>
      <section className="hero container df">
        <div className="hero__left">
          <h2 className="hero__title">Discover Most Suitable Watches</h2>
          <p className="hero__desc">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <form className="hero__form">
            <IoSearch className="form__search" />
            <input type="text" placeholder="Find the best brands" />
            <button className="hero__btn">Search</button>
          </form>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
