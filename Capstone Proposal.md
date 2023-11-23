# Project Title

## Overview

What is your app? Brief description in a couple of sentences.

    My Capstone project is to create a meet up app to join hikers of all experiences levels. Users can input their Grouse Grind time to be automatically grouped together with individuals of similar fitness. Users will select from specific parameters to narrow down the hike route selection process.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

    Lots of hikers prefer to hike with a group when venturing into the backcountry. There there are safety in numbers and comradery to be had but finding partners sometimes can be difficult. Skill levels, fitness and experience may differ and my project will allow users to match more easily.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

    Hikers looking to meet up with people of similar fitness and experience level. Users will be divided by fitness and distance/elevation parameters and location if possible.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

    My app will make use of the strava api for data regarding local hikes. This data will include hike distance in km, hike elevation gain in km and estimated time to complete. Users selection will be stored and compared to new users to find matches.

    Updated to use real data sourced online using mySQL as strava api wasn't quite enough to complete the project. Updated to now select a random hike when a button is pressed and also can take in user name and store to database. User can input name and select a grouse grind time which will provide a difficulty rating to mySQL and match that to some hikes in their difficulty range.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

    React
    Node.JS
    Javascript
    HTML5
    CSS3
    mySQL
    Express
    Sass

### APIs

List any external sources of data that will be used in your app.

    Strava API (https://developers.strava.com/docs/reference)

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

    Main page: A landing page with hero image and get started button (call to action "hike now" button time permitting)
    Select a hike Page:
    User Reviews(time permitting)
    User profile ( time permitting)

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
![original mockup](<assets/images/capstone first mockup.jpg>)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

    I plan to source local hikes using the strava api, this will require a bearer token every 6 hours. I will create a .env file and update that with the token as required.
    If this is not possible i will create a  JSON file with as much hiking data locally that i can find. User data about hike selection and difficulty/location I plan to store in mySQL. I will use functions to compare inputted data to previously inputted(existing data) and match users

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

    Get requests from Strava api using strava api  bearer token. Post request to JSON or mySQL(time permitting) for user comments/reviews.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

    If possible I will utilize client side auth and cookies to store user data. As we are learning this in class at the moment I am unsure of the final implementation

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

    Sprint 1: Create back end function, including links, routes, get and post requests.
    Sprint 2: Style and "nice to haves" if time permits

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

    Users could have the ability to post a review on a given hike. Data would be stored in mySQL and read with FS.
    Users could have a profile that stores data about their hikes, experience and comments.
    Geolocation could be implemented to help show users hikes in the general proximity. (actual difficulty of this not yet known)
