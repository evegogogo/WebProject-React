import React from 'react';
import "./style/faqs.css";

const FAQS = () => (
    <div className="faqs_container">
        <div className="background_image_box">
            <img className="backgound_image" src="images/faqs.png" alt="" />
        </div>
        <div className="question_container">
            <div className="question_title">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="questions">
                <ul>
                    <li>
                        <span>Why do I choose CrazyFit?</span>
                        <p>
                            CrazyFit is free and easy to use.
                            It provides a searchable food database and you can have your own personal food database.
                            In addition, you can track your history.
                        </p>
                    </li>
                    <li>
                        <span>How long does it take to see results?</span>
                        <p>
                        You may be able to see results in the first 4-8 weeks. 
                        This depends in large part to your nutrition. 
                        You can work out as hard as you’d like. 
                        If you do not eat right, you will not get far.
                        </p>
                    </li>
                    <li>
                        <span>Can I workout every day?</span>
                        <p>
                        You can, however your body needs rest. 
                        Remember, when you strength train, your muscles grow when you are at home, resting. 
                        It is recommended, if you are new to exercise to start twice a week at 20 minutes at a time, gradually increasing the time to 3 times a week at no more than 45 minutes. 
                        Generally, 4 times a week is sufficient to gain muscle strength.
                        </p>
                    </li>
                    <li>
                        <span>I'm on a very low carb diet, is that good?</span>
                        <p>
                        Well, first of all, your body is designed to survive. 
                        Plain and simple. Your body will store anything that it does not have enough of. 
                        If you deprive your body of carbohydrates for a while, your body will store them because it doesn’t have any, you are not feeding it any! 
                        So you end up with more than you wanted!
                        </p>
                    </li>
                    <li>
                        <span>Working out with an empty stomach?</span>
                        <p>
                        Avoid this! Can you get away with it? Sure, but it is not recommended. 
                        What your body will end up using muscle for fuel if your stomach is empty is stored glycogen, if there isn’t enough of that, it will use up protein, which means, essentially, your muscles! 
                        I’ve seen it too often where someone tries to workout on an empty stomach and shortly after being fatigued, they become dizzy or feel sick!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div >
);

export default FAQS;