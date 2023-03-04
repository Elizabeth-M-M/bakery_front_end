import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ username, isLoggedIn }) => {
  const navigator = useNavigate();

  function handleTaste() {
    navigator("/products");
  }
  // console.log(isLoggedIn)
  return (
    <>
      <section className="pt-2 text-center text-sm-start container">
        <p className="theme-color">
          {isLoggedIn ? `Welcome ${username}` : null}
        </p>
        <div>
          <div className="row">
            <div className="col-12 col-sm-5 me-0 me-sm-5 mb-5 mb-sm-0 text-center">
              <h2 className="display-2 lh-1 mt-sm-5 mt-0 theme-color">
                Slice of Heaven
              </h2>
              <p className="my-4 lh-4">
                Welcome to our bakery! We are so glad you stopped by to explore
                our delicious selection of baked goods. From fresh bread to
                sweet treats, we have something for everyone to enjoy.
              </p>
              <button onClick={handleTaste} className="btn-style">
                Taste
              </button>
            </div>
            <div className="col-12 col-sm-5 header-image">
              <img
                src={require("../images/cake4.png")}
                className="img-fluid"
                alt="cake-sample"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
