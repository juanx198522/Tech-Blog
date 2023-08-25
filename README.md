# Model-View-Controller (MVC): Tech Blog

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video Link](#walkthrough-video-link)
- [Deployed Application Link](#deployed-application-link)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

## Description

Writing about tech is as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. This Tech Blog CMS is a platform where developers can publish their blog posts and comment on other developers' posts. It follows the Model-View-Controller (MVC) architectural pattern and uses technologies like Handlebars.js, Sequelize, and express-session for authentication.

---

## User Story

As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

---

## Acceptance Criteria

Given a CMS-style blog site:

- When I visit the site for the first time, then I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
- When I click on the homepage option, then I am taken to the homepage.
- When I click on any other links in the navigation, then I am prompted to either sign up or sign in.
- When I choose to sign up, then I am prompted to create a username and password.
- When I click on the sign-up button, then my user credentials are saved, and I am logged into the site.
- When I revisit the site at a later time and choose to sign in, then I am prompted to enter my username and password.
- When I am signed in to the site, then I see navigation links for the homepage, the dashboard, and the option to log out.
- When I click on the homepage option in the navigation, then I am taken to the homepage and presented with existing blog posts that include the post title and the date created.
- When I click on an existing blog post, then I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
- When I enter a comment and click on the submit button while signed in, then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
- When I click on the dashboard option in the navigation, then I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
- When I click on the button to add a new blog post, then I am prompted to enter both a title and contents for my blog post.
- When I click on the button to create a new blog post, then the title and contents of my post are saved, and I am taken back to an updated dashboard with my new blog post.
- When I click on one of my existing posts in the dashboard, then I am able to delete or update my post and taken back to an updated dashboard.
- When I click on the logout option in the navigation, then I am signed out of the site.
- When I am idle on the site for more than a set time, then I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.

---

## Walkthrough Video Link
[https://drive.google.com/file/d/13Ysyj-0igB0MKhfsLwX0VBAjAyNpT-wo/view](https://drive.google.com/file/d/13Ysyj-0igB0MKhfsLwX0VBAjAyNpT-wo/view)

---

## Deployed Application Link
[https://tech-blog-app-2023-c79c738b29bd.herokuapp.com/](https://tech-blog-app-2023-c79c738b29bd.herokuapp.com/)

---

## Getting Started

The application’s folder structure follow the Model-View-Controller paradigm. We use the express-handlebars package to implement Handlebars.js for the Views, use the MySQL2 and Sequelize packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.

We also use the dotenv package to use environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages to add authentication.

Note: The express-session package stores the session data on the client in a cookie. When you are on the site for more than a set time, the cookie will expire, and you will be required to log in again to start a new session. This is the default behavior.

---

## Installation

To install the required dependencies, run the following command:
- npm install

---

## Usage
To start the application, run the following command:
- node seeds/seed.js
- npm start

Access the application in your web browser at http://localhost:3000

---

## Built With
- Express.js
- Handlebars.js
- Sequelize
- MySQL2
- dotenv
- bcrypt
- express-session
- connect-session-sequelize

---
## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

---

## Questions
If you have any questions, feel free to reach out to the project maintainers:

- Maintainer Name: Juan Cruz Garcia
- GitHub: [https://github.com/juanx198522](https://github.com/juanx198522)

