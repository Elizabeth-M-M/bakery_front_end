import React from 'react'

const Team = () => {
  return (
    <section className="p-5 text-center">
      <div className="container">
        <h1>Our Artisans</h1>
        <p className='py-sm-4 py-2'>
          Our friendly staff is always here to assist you with any questions you
          may have, and we take pride in providing a welcoming atmosphere for
          all of our customers. Thank you for choosing our bakery, and we look
          forward to serving you soon!
        </p>
        <div className="row text-dark g-3">
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="img-size-round">
                  <img
                    src="https://images.pexels.com/photos/3873498/pexels-photo-3873498.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
                <h3 className="card-title mt-3">Elissa Mila</h3>
                <p className="font-italic">Lead Baker</p>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="img-size-round">
                  <img
                    src="https://images.pexels.com/photos/3664444/pexels-photo-3664444.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>

                <h3 className="card-title mt-3">Micheal Kamau</h3>
                <p className="font-italic">Pastry Chef</p>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="img-size-round">
                  <img
                    src="https://images.pexels.com/photos/3894387/pexels-photo-3894387.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
                <h3 className="card-title mt-3">Milly Mukami</h3>
                <p className="font-italic">Cake Decorator</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="img-size-round">
                  <img
                    src="https://images.pexels.com/photos/7562187/pexels-photo-7562187.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
                <h3 className="card-title mt-3">Benson Jenta</h3>
                <p className="font-italic">Bakery Manager</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team