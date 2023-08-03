import React from "react";
import userImg from "../profile.png";

const Hero = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-card1">
          <h1>Hi, I am Bibek Shrestha</h1>
          <h2>Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolor
            ad ipsum enim, atque blanditiis natus quae error quisquam cumque.
          </p>
          <div className="home-btn">
            <a href="#">
              <span>Hire me</span>
            </a>
            <a href="#">
              {" "}
              <span>Contact Me</span>{" "}
            </a>
          </div>
        </div>
        <div className="home-card2">
          <img src={userImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
