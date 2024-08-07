import React, { useEffect, useState } from "react";
import "./WomenTopRated.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WomenTopRated = () => {
  const [womenData, setWomenData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    try {
      const limit = 50;
      const url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"gender":"Women"}&limit=${limit}`;
      const options = {
        method: "GET",
        headers: { projectID: "kfdh4hevj36w" },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      const womenProducts = data?.data?.filter(
        (item) => item.gender === "Women" && item.sellerTag === "top rated"
      );

      setWomenData(womenProducts || []);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const prevSlides = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + womenData.length) % womenData.length
    );
  };
  const nextSlides = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 4) % womenData.length);
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div>
      <div className="heading">
        <h2>TOP RATED</h2>
      </div>
      <div className="topRated_carousel_container">
        {womenData.map((product, index) => (
          <Link
            to={`/getsingleproductdetails/${product._id}`}
            style={slideStyle}
            className="slides_container"
          >
            <div key={product._id} className="slides">
              <div
                className="zoomable_img_div women_new_arr_img_div"
                style={{ overflow: "hidden" }}
              >
                <img
                  className="zoomable_image"
                  style={{ height: "100%", width: "100%" }}
                  src={product.displayImage}
                  alt=".."
                />
              </div>
              <p className="product_brand_name">
                <strong>{product.brand}</strong>
              </p>
              <div className="underLine"></div>
              <p className="product_subcategory_name">{product.subCategory}</p>
              <p className="product_price">
                <strong>₹{product.price}</strong>
              </p>
            </div>
          </Link>
        ))}
      </div>
      {currentIndex !== 0 && (
        <button
          className="women_topRated_btn women_topRated_prev_btn"
          // className={currentIndex === 0 ? "hidden" : "prev_btn"}
          // style={{ display: currentIndex === 0 ? "none" : "" }}
          onClick={prevSlides}
        >
          <FaAngleLeft
            style={{
              filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.8))",
              color: "white",
              fontSize: "35px",
            }}
          />
        </button>
      )}
      <button
        className="women_topRated_btn women_topRated_next_btn"
        onClick={nextSlides}
      >
        <FaAngleRight
          style={{
            filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.8))",
            color: "white",
            fontSize: "35px",
          }}
        />
      </button>
    </div>
  );
};

export default WomenTopRated;
