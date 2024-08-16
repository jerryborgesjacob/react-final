# About these folders
This is a simplified example demonstrating how you would run a Node/Express/Mongo backend as an API for a React frontend (MERN stack). This is just demoing retrieval of one dataset (menu links) to show how things are used in relation to one another in a MERN stack. You can build a more complicated app by implementing API endpoints for other datasets and/or CRUD functions.

## nodeapp
The nodeapp folder contains the Node app (API) reading menu links from MongoDB. The path /api/menu is the API endpoint to retrieve and return the JSON array of menu links.

### To run nodeapp
1. Navigate to the nodeapp folder.
2. **npm i** to install modules.
3. **npm run dev**

## react-mern
The react-mern folder contains a React app which makes an API request to nodeapp to retrieve menu links. This only shows an API request in the Nav component but this can be extrapolated to retrieve a bunch of different data for various content. This was simplified to give you the gist of how it works together.

### To run react-mern
1. Navigate to the react-mern folder.
2. **npm i** to install the modules.
3. **npm run dev**