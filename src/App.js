import React from "react";
import "./style.css";
import userImg from "./profile.png";
function App() {
  return (
    <>
      <input type="checkbox" id="mode" />

      <header>
        {/* <!-- mode --> */}
        <label htmlFor="mode">
          <i
            className="fa-solid fa-circle-half-stroke toggle"
            style={{ color: "#27282a" }}
          ></i>
        </label>
        {/* <!-- navbar --> */}
        <a href="#" className="logo">
          <span>B</span>I<span>B</span>EK.
        </a>
        <input type="checkbox" id="check" className="check" />
        <label htmlFor="check" id="checkbtn">
          <i className="fa-solid fa-bars" style={{ color: "#3e77da" }}></i>
        </label>
        <ul className="navlinks">
          <li>
            <a href="#home" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#about-page">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#social-page">Socials</a>
          </li>
        </ul>
      </header>
      {/* <!-- hero --> */}
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
      {/* <!------------------------- About page--------------- --> */}
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

      {/* <!-- ----------------------socialmedia----------- --> */}
      <section className="skillset" id="skills">
        <h1>Skills</h1>
        <div className="skills">
          <div className="skill-icon icon1">
            <i className="fa-brands fa-html5"></i>
            <h2>HTML</h2>
          </div>
          <div className="skill-icon icon2">
            <i className="fa-brands fa-css3-alt"></i>
            <h2>CSS</h2>
          </div>
          <div className="skill-icon icon3">
            <i className="fa-brands fa-square-js"></i>
            <h2>JAVASCRIPT</h2>
          </div>
          <div className="skill-icon icon4">
            <i className="fa-brands fa-react"></i>
            <h2>REACT</h2>
          </div>
        </div>
      </section>

      {/* <!-- ----------------socials---------------- --> */}
      <section className="socials" id="social-page">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
      </section>
    </>
  );
}

export default App;
