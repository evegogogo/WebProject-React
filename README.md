## Members

* Jingzheng Song
* Menglin Shen

## Links

Heroku UI: https://crazyfituifinal.herokuapp.com/home
Heroku API: https://crazyfitapi.herokuapp.com/graphql

UI: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI

API: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit

## Overview

CrazyFit a fitness web application that intends to help people who want to lose weight and keep a healthy lifestyle. This website provides healthy food recipes, food intake tracker, exercise calories tracker and an alarm to record exercise. Our goal is to help people stay on track and reach the goal.

### Iteration 3

In iteration 3, we replaced the previous temporary auth0 login and logout with our own designed login/logout flow. Users' information will be added to the database when clicking on the signup button. The users can only see the receipes page and the pages in the footer without login. The registered users can signin when they click login button. The login queries can get the jwt token back and use the token to protect routes. Logged in users will get their own saved foods, exercises and displayed history. We then save the token and set it as cookie to persist users' login status. Furthermore, we completed all the pages in footer. All users can send messages to Menglin's email in the contact page, and the messages will be stored in database as well.

## Contributions

Jingzheng Song (50%):

1. Focused on backend API and realized the CRUD functionality on MongoDB and handles the request from the client.
2. Developed GraphQL queries and mutations for food, exercise, alarm, history and contact pages.
3. Created the GET and POST methods on API to realize the functionality. 
4. Realized the login and logout flow.
5. Deployed the application to Heroku. 
6. Debugging.

Menglin Shen (50%):

1. Focused on frontend UI and designed all the web pages responsively.
2. Wrote all the css styles.
3. Developed a login and registration form.
4. Created the contact form which can deliver messages to the email and store the data on MongoDB. 
5. Wrote the Readme.
6. Debugging.

* Login

  ![login](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/login.png)

* The landing page

  ![home](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/home.png)
  ![home2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/home2.png)

* Recipes

  ![receipes](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/recipes.png)
  
* Foods

  ![foods](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/foods.png)
  
* Exercise

  ![exercises](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/exercises.png)

* Alarm

  ![alarm](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/alarm.png)

* History

  ![history](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/history.png)
  
* About

  ![about](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/about.png)
  
* Contact

  ![contact](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/contact.png)

* FAQS

  ![faqs](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/faqs.png)
  
* Join

  ![join](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/join.png)
  
  
### Iteration 2

In iteration 2, we we developed CRUD modules, queries and mutations. In addition, we created an authenticated login and signup form, so that users can log in and see the personal information. In the recipes page, the users can search relative recipes by the key words, such as apple and banana. In the food and exercise pages, the users can add the food and exercise by calories, status and date. In addition, the users can delete and like the food and exercise. In the alarm page, the users can set the time to exercise and the alarm will sound to remind the user. In the history page, the users' record will show by the date and in the descending order.

## Contributions

Jingzheng Song:

1. Focused on backend API and realized the CRUD functionality on MongoDB and handles the request from the client.
2. Developed GraphQL queries and mutations for food, exercise, alarm and history pages.
3. Created the GET and POST methods on API to realize the functionality. 
4. Deployed the backend and frontend to Heroku.
5. Debugging.

Menglin Shen:

1. Focused on frontend UI and designed all the main pages.
2. Integrated an authentication login and signup form with Auth0 and Google credentials.
3. Developed the Auth0 authentication and started working on the connection of users database on MongoDB.
4. Deployed frontend to Heroku.
5. Debugging.

* Login

  ![login](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/login.png)

* The landing page

  ![home](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/home.png)

* Recipes

  ![food](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/food.png)

* Exercise

  ![exercise](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/exercise.png)

* Alarm

  ![alarm](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/alarm.png)

* History

  ![history](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/history.png)

### Iteration 1

In iteration 1, we built the overall structure of the website and created the React components to realize the functionality we want to build. 

For the UI part, we created the basic components that will be used in later development stages. We use EDAMAM recipe API to get recipes based on users' search, render basic layout, and navbar of the web site.

* The landing page

  ![landingpage1](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/landingpage1.jpg)

  ![landingpage2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/landingpage2.png)

  ![landingpage3](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/landingpage3.png)

* Recipes

  ![recipes](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/recipes.png)

  ![recipes2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/recipes2.png)

* Foods

  ![foods](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/foods.png)

* Exercise

  ![exercise](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/exercise.png)

* Alarm

  ![alarm](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/alarm.png)

* History

  ![history](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/history.png)

* User

  ![user](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI/blob/master/readme_images/user.png)
