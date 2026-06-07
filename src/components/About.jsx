import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Founded in 2015, our restaurant began with a simple passion: to serve
              authentic, mouth-watering dishes made from the freshest ingredients.
              What started as a small family kitchen has now grown into a beloved
              dining destination, but our core values remain unchanged. We believe
              that great food brings people together, which is why every dish is
              crafted with love, care, and attention to detail. From locally sourced
              produce to our secret family recipes passed down through generations,
              we take pride in delivering an unforgettable culinary experience. 
              Whether you're joining us for a quick lunch, a romantic dinner, or 
              a celebration with loved ones, our team is dedicated to making every 
              visit special.
            </p>
            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;