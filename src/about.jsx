import React from 'react';
 import "./style/about.css";

 const About = () => (
   <div className="about_container">
     <div className="title_box">
       <h2 className="title"> About CrazyFit</h2>
     </div>
     <div className="about_row">
       <div className="about_col">
         <h2 className="content_title">Lose Weight with CrazyFit</h2>
         <div className="content_body">
           <p>
             Losing weight isn't easy - we know.
         </p>
           <p>
             But with a member to CrazyFit, you'll get the tools you need to successfully take weight off - and keep it off.
         </p>
           <p>
             Study after study has confirmed the benefits of keeping track of the food you eat and the activity you do.
             It's simple - the more consistently you track your food intake, the more likely you are to lose weight.
         </p>
           <p>
             CrazyFit help you reach your goal.
         </p>
         </div>
       </div>
       <div className="about_col">
         <div className="about_image_box">
           <img className="about_image" src="images/about.jpg" alt="" width="540" height="675" />
         </div>
       </div>
     </div>
   </div >
 );


 export default About;
