import React from 'react';
import "./style/join.css";

const Join = () => (
    <div className="join_container">
        <div className="background_image_boxs">
            <img className="backgound_image" src="images/joinus.jpeg" alt="" />
        </div>
        <div className="social_container">
            <div className="social_title">
                    <h2>Welcome to Our Team</h2>
            </div>
            <div className="social_row">
                <div className="social_col">
                    <a href="mailto:shen.me@northeastern.edu">
                        <img className="icon_image" src="images/email.png" alt="" />
                    </a>
                    <h2>Email</h2>
                </div>
                <div className="social_col">
                    <a href="https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI">
                        <img className="icon_image" src="/images/github.png" alt="" />
                    </a>
                    <h2>Github</h2>
                </div>
                <div className="social_col">
                    <a href="https://www.linkedin.com/in/menglinshen/">
                        <img className="icon_image" src="/images/linkedin.png" alt="" />
                    </a>
                    <h2>LinkedIn</h2>
                </div>
            </div>
        </div>
    </div >
);

export default Join;