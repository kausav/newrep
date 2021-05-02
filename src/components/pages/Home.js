import React from "react";

import "../../App.css";
import { Button } from "../Button";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <section className="home-container">
      <img src="images/sherry.JPG" />
      <div className="max-width">
        <div className="home-content">
          <div className="text1">Hello, My Name is</div>
          <div className="text2">Kausav Kumar</div>
          <div className="text3">
            And I'm a{" "}
            <span>
              {" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Developer",
                  1000,
                  "Designer",
                  1000,
                  "Open-Sourcer",
                  1000,
                  "Freelancer",
                  1000,
                ]}
              />
            </span>
          </div>
          <div className="home-btns">
            <a href="/pdfs/resume2.pdf">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
