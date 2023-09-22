import React from "react";
import Layout from "./Layout";

const Skills = () => {
  return (
    <Layout>
      <div>
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
      </div>
    </Layout>
  );
};

export default Skills;
