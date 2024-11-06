import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section fluid className="home-div pt-5">
        <div className="container text-center pt-5">
          <div className="row pt-5">
            <div className="col pt-5">
              <h1 className="pt-5">Welcome To Royal Body Massage Hub</h1>
              <h5 className="mb-4">
                <i>Where relaxation and rejuvenation await...</i>
              </h5>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae ut iusto
                <br /> necessitatibus neque fuga eveniet voluptatum quae,
                cumque, porro quod, modi quidem facilis cum
                <br /> delectus itaque nisi exercitationem dolorem ullam.
              </p>
              <a href="/bookcalender">
                <button type="button" className="btn btn-lg home-btn">
                  Book Now <BsArrowRight />{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
