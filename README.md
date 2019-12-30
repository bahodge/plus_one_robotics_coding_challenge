# Plus One Robotics Coding Challenge

This coding challenge is meant to fulfill the following requirements

- [ ] Develop a single-page web application
- [ ] Pull data from an api or public resource
- [ ] Allow a user to perform an informed action based on this data
- [ ] Please provide documentation on setup and usage
- [ ] Have tests **(optional)**
- [x] Incorporated in docker pipeline **(optional)**
- [ ] Public hosted for immediate viewing **(optional)**

## Tech Stack

- NodeJS `v13.0.0`
- NPM `v6.12.0`
- Create React App `v3.3.0`

## APIs used

- OMDB - Open Movie Database

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

## Dev Log

## The Plan

I had a super hard time figuring out what I wanted to do because I got hung up on the "meaningful action" phrase in the requirements. I had no idea until someone suggested a way to search for a movie, then see the show times in all the theaters closest to you. At this point, I know that I can search for movies, but I cannot get the top 10 or whatever because fandango is closed api. So bummer. But, luckally I found OMDB which allows me to search. I don't think I'll need to implement the google maps API for plotting at this point as it is time consuming, but, that may be a feature I add later.

### The Flow

- The user will enter a title of a movie into a form
- The user will be presented with result
  - If no result, return 'no results'
- If there is a result
  - The application will show the user show times at theaters in a specified area.

## Day 0

### Services

I have created a request service that will handle all of the complicated stuff needed to send out a request to all of the apis I use. This will also expose an internal api that will be consumed in components.

- `services/request_service.js`

### Components

#### Forms

I will not be using a form library like `formik` or `redux-form`, instead, I'll just use react hooks. The forms should be able to validate user input, handle submission and any errors. The form should also be able to pass the result to another component.
