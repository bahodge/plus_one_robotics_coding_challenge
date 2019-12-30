# Plus One Robotics Coding Challenge

This coding challenge is meant to fulfill the following requirements

- [ ] Develop a single-page web application
- [ ] Pull data from an api or public resource
- [ ] Allow a user to perform an informed action based on this data
- [ ] Please provide documentation on setup and usage
- [ ] Have tests **(optional)**
- [ ] Incorporated in docker pipeline **(optional)**
- [ ] Public hosted for immediate viewing **(optional)**

## Tech Stack

- NodeJS `v13.0.0`
- NPM `v6.12.0`
- Create React App `v3.3.0`

## Application Overview

This application will use a few different APIs.

## Running the Application

The following workflow will build a production version of the application.

- `docker build . -t bahodge/plus_one_robotics_coding_challenge`
- `docker run -p 8080:80 bahodge/plus_one_robotics_coding_challenge:latest`
- [localhost:8080](http://localhost:8080)

The following workflow will build the application for development

- `npm install`
- `npm start`