## Members

* Jingzheng Song
* Menglin Shen

## Links

Heroku: https://crazyfitui.herokuapp.com/

UI: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit_UI

API: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_CrazyFit

## Overview

CrazyFit a fitness web application that intends to help people who want to lose weight and keep a healthy lifestyle. This website provides healthy food recipes, food intake tracker, exercise calories tracker and an alarm to record exercise. Our goal is to help people stay on track and reach the goal.

### Iteration 2

In iteration 2, we we developed CRUD modules, queries and mutations. In addition, we created an authenticated login and signup form, so that users can log in and see the personal information. In the recipes page, the users can search relative recipes by the key words, such as apple and banana. In the food and exercise pages, the users can add the food and exercise by calories, status and date. In addition, the users can delete and like the food and exercise. In the alarm page, the users can set the time to exercise and the alarm will sound to remind the user. In the history page, the users' record will show by the date and in the descending order.

### Iteration 3

In iteration 3, we replaced the previous temporary auth0 login and enabled out own login/logout flow. We can add users' information to database when clicking signup button. The registered users can then signin when they click login button. The login queries get the jwt token back and use the token to protect routes. Logged in users will get their own saved foods, exercises and displayed history. We then save the token and set it as cookie to persist users' login status. Furthermore, we finish all the pages in footer. All users can send messages to Menglin's email, and the messages will be stored in database as well.

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

For the UI part, we created the basic components that will be used in later development stages. We use recipe API to get recipes based on users' search, render basic layout, and navbar of the web site.

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
