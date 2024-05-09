import React from "react";
import { FaStar } from "react-icons/fa";
import { aboutData } from "../../static";
import "./about.scss";

const About = () => {
  return (
    <section className="about container">
      <h3 className="about__name">Here are our some of the best clients.</h3>
      <h2 className="about__title">What People Say About Us</h2>
      <div className="about__cards">
        {aboutData.map((about) => (
          <div className="about__card" key={about.id}>
            <div className="about__img">
              <img src={about.img} alt="" />
            </div>
            <div className="about__infos">
              <h3 className="about__card__title">{about.title}</h3>
              <p className="about__card__desc">{about.desc}</p>
              <div className="about__card__stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
