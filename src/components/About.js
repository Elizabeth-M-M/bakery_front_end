import React from 'react'

const About = () => {
  return (
    <>
     <section className="p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="image-size mt-5 mt-md-0">
            <img src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt=""/>
          </div>
          <div className="me-0 me-md-5">
            <h2>About</h2>
            <p className="mt-2 mb-sm-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tempora maxime at beatae repellendus modi voluptas magni nihil ratione placeat quaerat autem blanditiis in? Neque?</p>
          </div>
          
        </div>
      </div>
    </section>

    <section className="p-5" id="faqs">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <div className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#question-1">Why eat with us?</button>
            </div>
            <div className="collapse accordion-body" id="question-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id doloremque numquam minima omnis sequi fuga
              quisquam distinctio facilis.
            </div>
          </div>
        </div>

        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <div className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#question-2">How long will an order take?</button>
            </div>
            <div className="collapse accordion-body" id="question-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id doloremque numquam minima omnis sequi fuga
              quisquam distinctio facilis.
            </div>
          </div>
        </div>

        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <div className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#question-3">Are cakes readily available?</button>
            </div>
            <div className="collapse accordion-body" id="question-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id doloremque numquam minima omnis sequi fuga
              quisquam distinctio facilis.
            </div>
          </div>
        </div>

        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <div className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#question-4">Where are you located?</button>
            </div>
            <div className="collapse accordion-body" id="question-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi id doloremque numquam minima omnis sequi fuga
              quisquam distinctio facilis.
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> Sarit Centre, Nairobi, Kenya
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Inquiry Phone:</span> (+254) 555-5555
              </li>              
              <li className="list-group-item">
                <span className="fw-bold">Email:</span> inquiry@sliceofheaven.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            {/* <div class="mt-4 text-center">
          <h4>Feel free to visit our shop</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8518221547033!2d36.79978901432558!3d-1.2611604990801393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176b69033ae5%3A0x527c0b54641e212!2sSarit%20Centre%2C%20Karuna%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1677646835221!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About