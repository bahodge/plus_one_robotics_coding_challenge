# Plus One Robotics Coding Challenge

This coding challenge is meant to fulfill the following requirements

- [x] Develop a single-page web application
- [x] Pull data from an api or public resource
- [x] Allow a user to perform an informed action based on this data
- [x] Please provide documentation on setup and usage
- [x] Incorporated in docker pipeline **(optional)**
- [ ] Have tests **(optional)**
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

### Services

I have created a request service that will handle all of the complicated stuff needed to send out a request to all of the apis I use. This will also expose an internal api that will be consumed in components.

- `services/request_service.js`

### Components

#### Forms

I will not be using a form library like `formik` or `redux-form`, instead, I'll just use react hooks. The forms should be able to validate user input, handle submission and any errors. The form should also be able to pass the result to another component.

I did use a guide and I to check it out. Click [here](https://www.youtube.com/watch?v=8yo44xN7-nQ&t=710s)

In a nutshell, this guide pulls all the basic functionallity out of the `formik` library. In the end, I probably should have just used formik, but it was a learning experience for me.

#### Form Sanitizer

Form sanitizing is important and the way it is now build is as an extensible workflow. So if in addition to strings, I wanted to sanitize numbers or something, I could create a special sanitizing function for that. It also works on a copy and therefore doesn't modify the original inputs.

## Day 0

I only had a few hours to get started working on the project. I set up the basic skeleton of the project as well as began researching ideas, tooling and apis I could use. After speaking with some friends, they gave me the idea of looking up movies and finding theaters near you and displaying some show times. I built the docker workflow and have begun integrating apis.

Work Time: 3hrs (mostly brainstorming)

### Discovery

I cannot find an api to display show times without charging me money.

## Day 1

Implemented my own custom hook to handle form validation and submission. Check out the note above for "Forms." Implemented react redux and now have the 'search result' updating properly. Fixed a whole bunch of issues with form validation as well as handling strange responses from the OMDB api. I opted to use redux's `subscribe` method to have search result update instead of connect.

Work Time: 3hrs

### Day 2

I fixed up a few warnings related to the version of node and switched to node `12.14.0`. I also implemented form sanitizing which is composeable. I have also still not been able to find a free movie showtime API and therefore will be faking it. I will be using google's geolocation and places search.
