import React from "react";
import userImg from "../profile.png";

const About = () => {
  return (
    <div>
      <section className="about" id="about-page">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={userImg} alt="" />
            </div>
            <div className="about-col-2">
              <h1 className="about-title">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quisquam reprehenderit necessitatibus qui eaque exercitationem
                quaerat nihil at iure sunt illum, molestias eius dolore tempora,
                esse doloremque, vitae quidem cumque amet! Laborum error
                voluptatibus blanditiis fugit quia illo, sunt fugiat.
              </p>
              <div className="tab-titles">
                <div className="tab-links">
                  <h1>SKILLS</h1>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                  </ul>
                </div>
                <div className="tab-links">
                  <h1>EDUCATION</h1>
                  <ul>
                    <li>Bachelor In Information System</li>

                    <li>DENTED CODE</li>
                    <li>Udemy course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
