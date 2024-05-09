import React, { useEffect, useState } from "react";
import { ProductsData } from "../../static";
import { FaStar } from "react-icons/fa";
import "./products.scss";
import axios from "../../api";
import ProductDetail from "../productDetail/ProductDetail";
import Loading from "../loading/Loading";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const [option, setOption] = useState("products");
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);

  const parPageCount = 3;

  const openModal = (selectProduct) => {
    setSelectProduct(selectProduct);
  };
  const closeModal = () => {
    setSelectProduct(null);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/${option}`, {
        params: {
          limit: offset * 3 + parPageCount,
        },
      })
      .then((res) => setData(res.data[option]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset, option]);

  return (
    <section className="products container">
      <h4 className="products__info">Find your favourite smart watch.</h4>
      <h2 className="products__title">Our Latest Products</h2>
      <div className="resources__cards container">
        <div className="resources__btn" onClick={() => setOption("products")}>
          Products
        </div>
        <div className="resources__btn" onClick={() => setOption("users")}>
          Users
        </div>
        <div className="resources__btn" onClick={() => setOption("recipes")}>
          Recipes
        </div>
      </div>
      <div className="products container">
        {option === "products" ? (
          <div className="products__cards">
            {data?.map((product) => (
              <div className="products__card" key={product.id}>
                <div className="products__img">
                  <img
                    src={product.thumbnail}
                    onClick={() => openModal(product)}
                    alt=""
                  />
                </div>
                <div className="products__icons">
                  <div className="products__icon"></div>
                </div>
                <div className="products__infos">
                  <h4 className="products__name">{product.title}</h4>
                  <div className="products__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="products__category">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : option === "users" ? (
          <div className="products__cards">
            {data?.map((user) => (
              <div className="products__card" key={user.id}>
                <div className="products__img">
                  <img
                    src={user.image}
                    onClick={() => openModal(user)}
                    alt={user.firstName}
                  />
                </div>
                <div className="products__icons">
                  <div className="products__icon"></div>
                </div>
                <div className="products__infos">
                  <h4 className="products__name">{user.firstName}</h4>
                  <div className="products__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="products__category">{user.birthDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : option === "recipes" ? (
          <div className="products__cards">
            {data?.map((recipes) => (
              <div className="products__card" key={recipes.id}>
                <div className="products__img">
                  <img
                    src={recipes.image}
                    onClick={() => openModal(recipes)}
                    alt={recipes.name}
                  />
                </div>
                <div className="products__icons">
                  <div className="products__icon"></div>
                </div>
                <div className="products__infos">
                  <h4 className="products__name">{recipes.name}</h4>
                  {/* <h4 className="products__name">{recipes.ingredients[0]}</h4> */}
                  <div className="products__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="products__category">
                    {/* {recipes.instructions[0]} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Nothing foundet</p>
        )}
      </div>
      {loading ? <Loading /> : <></>}
      {selectProduct ? (
        <ProductDetail data={selectProduct} close={closeModal} />
      ) : (
        <></>
      )}

      <button className="products__btn" onClick={() => setOffset((p) => p + 1)}>
        See More
      </button>
    </section>
  );
};

export default Products;
