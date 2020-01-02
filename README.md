# Plus One Robotics Coding Challenge

This coding challenge is meant to fulfill the following requirements

- [x] Develop a single-page web application
- [x] Pull data from an api or public resource
- [x] Allow a user to perform an informed action based on this data
- [x] Please provide documentation on setup and usage
- [x] Incorporated in docker pipeline **(optional)**
- [x] Have tests **(optional)**
- [ ] Public hosted for immediate viewing **(optional)**

## Tech Stack

- NodeJS `v13.0.0`
- NPM `v6.12.0`
- Create React App `v3.3.0`

## Tools

- Semantic UI
- React-Redux
- Node Fetch
- Jest

## APIs used

- OMDB - Open Movie Database
- Google Places Api

## Application Overview

This application will use a few different APIs to determine a user's movie search and then find a theater near the user. I have decided that I wanted to do a minimalist project with minimum fluff and focus on the functionality of the application.

Please note that the show times are not real.

## Running the Application

The following workflow will build a production version of the application.

- `docker build . -t bahodge/plus_one_robotics_coding_challenge`
- `docker run -p 8080:80 bahodge/plus_one_robotics_coding_challenge:latest`
- [localhost:8080](http://localhost:8080)

The following workflow will build the application for development

- `npm install`
- `npm start`


## Testing the Application

- `npm test`

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

## Day 2

I fixed up a few warnings related to the version of node and switched to node `12.14.0`. I also implemented form sanitizing which is composeable. I have also still not been able to find a free movie showtime API and therefore will be faking it. I will be using google's geolocation and places search.

So after fighting google's cors policy for like 2 hours, I finally found a work around. I am essentially routing the request to a website with cors and SSL and all that stuff enabled already which then sends the request to google. I'm not super familiar with cors so this was the fastest way for me to do it. Without standing up a website. The problem that has arisen is that when you do not pass a location, google's places api will use the IP of the requestor. This means that since the rerouter website is located in VA that it will then only search for theaters in that region. This can be overridden by submitting a zip code, but it is just annoying at the moment.

Because the react side is very simple, I am only going to be adding tests to the dangerous parts.

Work Time: 5-6 hours

## Post Mortem

Well that was a journey and I had a ton of fun writing it. I learned way more about redux throughout this process as well. Some of the major parts that I struggled with was finding open API's that would give me the data that I wanted. I think it's pretty insane that I couldn't find a single free api that would give me show times for movies. On a technical level, I tried to keep the application as simple and lightweight as possible in order to focus on exploring new ways of solving problems.

### How would I improve this

I would for sure rework how external requests are made. Right now, all requests go through the `request_service.js`. This was a great idea when I first started as it collected all of the complicated parts into one spot. It also helped me isolate the weirdness into a single file. The problem is that it soon started evolving into a hectic file. It was getting hard to follow, but after a refactor I think it ended up becomming more workable. I would probably split this file into multiple subdirectories depending on the api that was being used. Then you could really chop it up into single method calls. I would also have spent much more time researching ideas, but after like 3 weeks of this I figured that this one was the best one I could come up with. There will always be some more UI work that can go on, like implementing loading spinners and stuff like that, but I think overall, I the workflow is pretty tight.

Adding a backend to handle all the external stuff would be amazing too instead of just relying on a client side application.

### What went well

I think that the overall workflow of my application ended up pretty well. I handle a ton of errors and edge cases discovered by testing and trial and error. For example, sometimes the OMDB will just not respond with anything useful and it was by chance that I discovered that. I also liked how I was able to pick up and migrate UI frameworks as well as shift APIs. I had originally wanted to use Fandango for everything, but unfortunately they wanted thousands of dollars. I think my solution is a good work around for not having access to any show times api. I also am pretty happy because this was the first time i'd ever used Jest as a testing framework. I think I picked it up but there is still a bunch I don't know. One thing I'm super proud of is creating my own custom hook, albeit using a guide, but the fact that I didn't use any form library is pretty cool.

### Things I had to scrap

The main thing that went wrong was the fact that I couldn't get a show times api. The second major thing is I wanted to implement a search history workflow, where it saves a term, movie and more. The problem I saw was that it started to take away from the main question trying to be answered by the premise, build an SPA that you do some meaningful action.

**Thanks again for considering me as a candidate for your company and I am super excited to hear back from you.**
