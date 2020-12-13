# Challenge Mercado Libre

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find the live project in https://dk-challenge-meli.netlify.app/

It connects with an API build with express and hosted on https://challenge-meli-server.herokuapp.com/

## Available Scripts

In the project directory `challenge-meli/`, you can run:

### `npm run start-server`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### `npm run start-front`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build-front`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## API Routes

### `/api/items?q=:query`

Searches for products with the specific query, e.g. https://challenge-meli-server.herokuapp.com/api/items?q=auto

### `/api/items/:id`

Get and specific item from MELI site, e.g. https://challenge-meli-server.herokuapp.com/api/items/MLA828357347
