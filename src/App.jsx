import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Reaction from "./components/reaction/Reaction";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Information from "./components/information/Information";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Reaction />
      <Products />
      <About />
      <Information />
      <Footer />
    </Fragment>
  );
};

export default App;
