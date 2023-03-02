import React from 'react'

const About = () => {
  return (
    <>
      <section className="pt-2 pt-sm-5 text-center text-sm-start container">
        <div>
          <div className="row">
            <div className="col-12 col-sm-5 header-image">
              <img
                src={require("../images/cake6.png")}
                className="img-fluid"
                alt="cake-sample"
              />
            </div>
            <div className="col-12 col-sm-5 me-0 me-sm-5 mb-5 mb-sm-0 text-center">
              <h2 className="display-2 lh-1 mt-sm-5 mt-0 theme-color">About</h2>

              <p className="my-4 lh-4">
                Our bakery is committed to using only the finest ingredients and
                baking everything fresh daily. Whether you're looking for a
                morning pastry or a decadent dessert, we have a wide variety of
                options to choose from.
              </p>            
            </div>
          </div>
        </div>
      </section>    

      <section className="p-5" id="faqs">
        <div className="container">
          <h2 className='display-6 text-center theme-color pb-2'>Frequently Asked Questions</h2>

          <div className="accordion accordion-flush">
            <div className="accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-1"
                >
                  Why eat with us?
                </button>
              </div>
              <div className="collapse accordion-body" id="question-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                animi id doloremque numquam minima omnis sequi fuga quisquam
                distinctio facilis.
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush">
            <div className="accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-2"
                >
                  How long will an order take?
                </button>
              </div>
              <div className="collapse accordion-body" id="question-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                animi id doloremque numquam minima omnis sequi fuga quisquam
                distinctio facilis.
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush">
            <div className="accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-3"
                >
                  Are cakes readily available?
                </button>
              </div>
              <div className="collapse accordion-body" id="question-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                animi id doloremque numquam minima omnis sequi fuga quisquam
                distinctio facilis.
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush">
            <div className="accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-4"
                >
                  Where are you located?
                </button>
              </div>
              <div className="collapse accordion-body" id="question-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                animi id doloremque numquam minima omnis sequi fuga quisquam
                distinctio facilis.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4 display-6 theme-color">Contact Info</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> Sarit Centre,
                  Nairobi, Kenya
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Inquiry Phone:</span> (+254)
                  555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email:</span>{" "}
                  inquiry@sliceofheaven.com
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default About