# React Todo Application
> This is a web application that allows you to search for cocktails on the [TheCocktailDB](https://www.thecocktaildb.com/) database. With this application you can learn the ingredients and instructions on how to make many cocktails. 
> Live demo [_here_](https://reactbartender.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- I created this project using React. For the API fetch requests I used the axios library. For the styling I used MaterialUI. The page navigation is done with react-router-dom.
- I created this project to practice making applications that make asynchronous calls to an API and rendering dynamic data. Also routing different components. 
- Challenges I faced.
  - Had to learn how to route based off user form submit. You can do this using navigate.
  - Before my grid component and single drink components would render based off props passed from main app.js. Problem was when the user visited the unique url or refreshed the page the props would reset and not save it state. So to get around this the api fetch calls had to be called within those components and update the state of the unique component. 
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- React - version 17.0.2
- MaterialUI - version 5.2.7
- axios - version 0.24.0
- react-router-dom - version 6.2.1

## Features
List the ready features here:
- You can search any cocktail in the search bar
- You can view searched drinks in a grid
- clicking each individual drink will navigate you to its own unique page to learn more
- Responsive Design

<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
How to install the project.
1. `cd react-bartender-v2-main`
2. `npm i`


## Usage
How does one go about using it?
- `npm start`
- The application should open on your local host on your default web browser.
- To close the application enter `ctrl+c`.


## Project Status
Project is: _complete_ 


## Acknowledgements
Give credit here.
- All data was provided from [TheCocktailDB](https://www.thecocktaildb.com/).
<!-- This project was based on [this tutorial](https://www.example.com). -->


## Contact
Created by [@javi](https://javiermelendrez.com/) - feel free to contact me!
