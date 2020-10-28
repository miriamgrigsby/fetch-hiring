# Fetch Hiring

A simple visualization of data fetched via proxy from a 3rd party source which employs Typescript/React/Sass/Ag Grid.

# Deployed App

* [Fetch Hiring](https://fetch-hiring.firebaseapp.com/)

## Motivation

I use Typescript/React/Sass/Ag Grid everyday in my current position at Seaspan, and wanted to create my own little project to highlight some of the things I have learned. Unfortunately, the environment was setup prior to my time at the company, which gave me the opportunity to learn how to set up this kind of application from scratch. I limited my time to 4 hours to see what I could could accomplish. The App is simple, yet fullfills it's purpose. Display data correctly sorted by listId then name (remove all the null/"" names), in a nice fashion. 

### Tech Stack

React 
Typescript
Sass
Ag Grid / Axios / Lodash / Toastify Libraries

## Getting Started and Installation

Fork/clone the repo

Check your NVM or node version manager and ensure it is on 14 (for best results)

### `nvm use 14` to switch over

### `yarn install`

### `yarn start` to run server 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Features

The two main features of the app are error handling with conditional rendering, and pre-set and available sorting.

The app loads and runs a fetch once, using a proxy, to fetch the data. If the fetch fails, a skeleton table is rendered and a Toast appears to let the user know what has happened. If the fetch succeeds, the data is passed to the table and displayed. 

The data is originally filtered to remove all Null and "" Name values, then sorted by listId and finally by the Id in the Name. This is displayed in ascending order in the table. Ag Grid has a simple feature for sorting, which I included on the listId column, to allow the user to switch to descending order. The first two columns can be adjusted to increase/decrease their width. Ag Grid has tons of cool features, but the data was too simple to use most of them.
