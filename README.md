# console.blog - A blog app built in React

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)


## Video Preview
https://www.youtube.com/watch?v=uxhnHY0qNsE

## About the App
A quick personal project created to recap the fundamentals of the React framework. 

Built relatively quickly in March 2022 - following completion of the [Northcoders](https://northcoders.com/) software development bootcamp. 

The user can browse a list of blog articles, add new articles, and delete articles from the database. Articles can be assigned a title, author and body text.

Incorporates a basic responsive design that adapts to different screen sizes.


## Technology used

React/Node.js for the front end framework, along with the 'json-server' package to mimic a REST API back end. This creates a 'dummy' server on the local machine, to serve up API-style data during development.

Built using resusable React components, and both built-in and custom hooks to manage features such as state, data fetching, error handling and custom page titles. React Router v6 was used to manage endpoints. 

Data is stored in a local JSON file - which is converted into API-style 'fetchable' data by running the 'json-server' module.

The user interface features a 'responsive' CSS grid-based layout, with web fonts and icons imported from Google Fonts.

## Run the App Locally

Follow these steps to run a local version of the project.

### Requirements

- [Node.js](https://nodejs.org/en/) v. 17.0.1 or higher (JavaScript runtime environment)
- [npm](https://www.npmjs.com/package/npm) (JavaScript package manager)

### Clone, and Install Dependencies

- First, download the project into a local folder. In your terminal, run:

  `git clone https://github.com/CH-DD/react-blog.git` (if using HTTPS)

  `git clone git@github.com:CH-DD/react-blog.git` (if using SSH)

- Then navigate into the new folder, and install dependencies:

  `cd react-blog`
  
  `npm install`

### Running the App

Once the above steps are complete, the app can be run locally and viewed in your web browser.

First, start the local API server. This is set to run on port 8000, with the database found at [localhost:8000/articles](http://localhost:8000/articles).

`npm run json-server`

Then, in a new Terminal instance, run the React project. This should run on port 3000, and open automatically in your browser at [localhost:3000](http://localhost:3000).

`npm run start`

## Functionality

Please note - there is currently a 'setTimeout' function used in the 'useFetch' custom hook, to simulate the delay of a typical web server when fetching data locally. This would be removed in a production build.

Similarly, the API would also be set up on a live server - as opposed to using the local 'json-server' features.

Also, articles currently contain placeholder content.

## Credits
- [React](https://reactjs.org/) - Front end framework
- [json-server](https://www.npmjs.com/package/json-server) - 'Fake local API' features
- [Google Fonts](https://fonts.google.com/) - Web font and Material Icons
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node.js package manager
