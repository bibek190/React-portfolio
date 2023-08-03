import React from "react";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
