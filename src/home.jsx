import React from "react";
import { NavLink } from "react-router-dom";
import "./style/home.css";


const Home = () => (
  <div className="home">
    <div className="home_container">
      <div className="slide">
        <div className="background_image_box">
          <img class="backgoud_image" src="images/2659284.jpg" alt="image" />
        </div>
        <div className="image_text_container">
          <div className="content">
            <div>Fitness starts with how <span>smart</span> you <span>eat</span></div>
            <div>and <span>exercise</span></div>
            <div className="button slide_button"><a href="#">Start for free</a></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="features_container">
          <div className="row">
            <div className="col">
              <div className="icon_box_img">
                <img className="icon_image" src="images/food.png" alt="image" />
              </div>
              <div className="icon_box_title">
                <NavLink className="icon_box_title" to="/foods">
                  Track Your Food
                </NavLink>
              </div>
              <div className="icon_box_text">
                <p>
                  Keeping a food diary helps you understand your habits and increase your likelihood of hitting your goals.
                  </p>
              </div>
            </div>
            <div className="col">
              <div className="icon_box_img">
                <img className="icon_image" src="/images/clipart.png" alt="image" />
              </div>
              <div className="icon_box_title">
                <NavLink className="icon_box_title" to="/exercise">
                  Record Your Exercise
                </NavLink>
              </div>
              <div className="icon_box_text">
                <p>Keeping an exercise record helps stay motivated and better track calories.</p>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img className="icon_image" src="/images/timer.png" alt="image" />
              </div>
              <div className="icon_box_title">
                <NavLink className="icon_box_title" to="/alarm">
                  Alarm
                </NavLink>
              </div>
              <div className="icon_box_text">
                <p>Use the timer to record your exercise time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
