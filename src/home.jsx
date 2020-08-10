import React from "react";
import { NavLink } from "react-router-dom";
import "./style/home.css";


const Home = () => (
  <div className="home">
    <div className="home_container">
      <div className="slide">
        <div className="background_image_box">
          <img className="backgoud_image" src="images/2659284.jpg" alt="" />
        </div>
        <div className="image_text_container">
          <div className="content">
            <div>Fitness starts with how <span>smart</span> you <span>eat</span></div>
            <div>and <span>exercise</span></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="features_container">
          <div className="row title_box">
            <div className="features_title">
              <h2>The Tools for Your Goals</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="icon_box_img">
                <img className="icon_image" src="images/food.png" alt="" />
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
                <img className="icon_image" src="/images/clipart.png" alt="" />
              </div>
              <div className="icon_box_title">
                <NavLink className="icon_box_title" to="/exercises">
                  Record Your Exercise
                </NavLink>
              </div>
              <div className="icon_box_text">
                <p>Keeping an exercise record helps stay motivated and better track calories.</p>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img className="icon_image" src="/images/timer.png" alt="" />
              </div>
              <div className="icon_box_title">
                <NavLink className="icon_box_title" to="/alarm">
                  Alarm
                </NavLink>
              </div>
              <div className="icon_box_text">
                <p>Use the alarm to record your exercise time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default Home;
