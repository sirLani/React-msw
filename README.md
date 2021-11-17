# How to run the Project

1. Clone the Project
2. Run `yarn install`
3. Run `yarn start`

## Project stack

React, Jest, React-testing-library, Styled Components, MSW(mock service worker)

Jest & React-testing-library will be used for writing unit and integration test hence making sure use-cases works as they should.

MSW was used to simulate a rest APi.

## Project Scaffold

The Project was bootstrap using create-react-app scaffold by running the command below:

`npx create-react-app my-app`

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

Even though certain concerns can be raised such as unused libraries like sass etc, it is still a great way to start the application, and we can eject later to manage dependencies ourselves.

The reason for bootstrapping with create-react-app are listed below :

1. Create React App takes care of handling under the hood things, updating things like webpack and babel will be taken care by them. We don't need to hassle with it again.

2. Support for most of the latest JavaScript standards and JSX using pre-configured babel configuration.

3. It gives us the ability to handle offline-mode out of the box. We get manifest.json and Service Worker files out of the box. (used for our caching / offline mode strategy).

4. It also comes with all the testing tools needed out of the box (Jest, react-testing-library), hence, it gives me (the developer) the tools needed just to focus on my code.

5. Support for code splitting via dynamic import() out of the box. This works great with React.lazy and Suspense (Used for optimizing our application).

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Challenges

I had a bit of a challenge deciding on how to get the data to display on the screen, I was contemplating on if i should just hard code the products into it or using it has a JSON file,
because i was considering reusability,best practice at the same time considering a usecase where one would want to work on the front end part of the project and the APIs are not readily available, then in this scenerio, would i have to delay the project pending the time the APIs are ready? so I decided to Mock the API using MSW and make it look like a live API, where i have to actually do a fetch to get my data, in this case if a live API comes in, all I have to just change is a few lines of code and the project is good to go

