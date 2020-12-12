# News APP

A UI that will allow to view and marks news as favourite for later read.
It will also have user authentication system
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  How to run locally
### `npm install`
It will install all dependencies
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm lint`

check and fix all the lint issue.
Using Airbnb as my style guide 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Directory Structure 
- components
		 common - It will have all component which are common can be easily re used
		  Pages - All routes page componet will be here

- constant
All constant and meta data in the application

- components
		 http - This folder will contain all the http (axios request)
		  util - It will utility functions related to application (common business logic )

- store - It also has barrel(index.js) to bootstrap the store
		 actions
		 reducers
		 actions

## FAQ

- It is best way to bootstrapped the project?
A.  Yes, it is also the fastest way of doing it but production you can simply eject project and do the changes webpack files

- Do we have linting ?
A.  Yes, Airbnb style guide. Moreover we can have husky And/or sonarqube

- Do we test setup ?
A.  No, It will add React and enzyme for testing

- Is it best application structure?
A.  No, beacuse in big apps, there should code spliting, proper separation of concerns in the various parts of application

- should we keep test files along with code js files or we should create a separate directory structure?
A.  As per me, unit test should present along with the code file

- What you will do for e2e testing?
A.  I will use cypress



####Reference for Design:
https://getbootstrap.com/docs/4.0/examples/blog/#