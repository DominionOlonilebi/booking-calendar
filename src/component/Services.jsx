import React from "react";

const Services = () => {
  return (
    <div className="service-div" id="service">
      <div className="container mt-3 mb-5">
        <div className="row mt-4 mb-5">
          <h2 className="mt-5 mb-4 text-center">Our Services</h2>
          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/massage5.jpg" className="img-fluid" />
              <h5 className="text-center mt-4">Premium</h5>
              <p className="mx-3 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                iste odit sunt quos molestiae dolores possimus debitis nostrum
                eveniet aliquam.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/massage6.jpg" className="img-fluid" />
              <h5 className="text-center mt-4">Standard</h5>
              <p className="mx-3 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                iste odit sunt quos molestiae dolores possimus debitis nostrum
                eveniet aliquam.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/massage5.jpg" className="img-fluid" />
              <h5 className="text-center mt-4">Classic</h5>
              <p className="mx-3 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                iste odit sunt quos molestiae dolores possimus debitis nostrum
                eveniet aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
