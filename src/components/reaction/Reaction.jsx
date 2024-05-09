import React from "react";
import { reactionProduct } from "../../static";
import "./reaction.scss";

const Reaction = () => {
  return (
    <section className="reaction container">
      <div className="reaction__cards">
        {reactionProduct.map((watch, indx) => (
          <div className="reaction__card" key={watch.id}>
            <div className="reaction__img">
              <img src={watch.img} alt="" />
            </div>
            <div className="reaction__info">
              <h3 className="reaction__title">{watch.title}</h3>
              <p className="reaction__desc">{watch.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reaction;
