# Udemy Course: Build Ecommerce Website Like Amazon [React & Node & MongoDB]

This repo contains my work in going through the Udemy course _Build Ecommerce
Website Like Amazon [React & Node & MongoDB]_, taught by instructor Basir
Jafarzadeh.

The course plan is as follows:

## Amazona ECommerce Website

1. Introduction to this course
   1. What you will build
   2. What you will learn
   3. Who are audiences

2. Install Tools
   1. Code Editor
   2. Web Browser: Google Chrome (for its Dev Tools)
   3. Node.js
   4. MongoDB Community Edition
   5. MongoDB Compass GUI
   6. Postman

3. Website Template
   1. Create amazona folder
   2. Create template folder to hold initial templates
   3. Create index.html
   4. Add default HTML code
   5. Link to style.css
   6. Create header, main and footer
   7. Style elements

4. Display Products
   1. Create products div
   2. Add product attributes
   3. Add link, image, name and price

5. Create React App
   1. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. Copy index.html content to App.js
   5. Copy style.css content to index.css
   6. Replace class with className

6. Share Code On Github
   1. Initialize git repository
   2. Commit changes
   3. Create github account
   4. Create repo on github
   5. Connect local repo to github repo
   6. Push changes to github

7. Create Rating and Product Component
   1. Create Product component in components/Product.js
   2. Create div.rating
   3. Style div.rating, span and last span
   4. Create rating component in components/Rating.js
   5. Use rating component

8. Build product screen
    1. Install react-router-dom
    2. Use BrowserRouter and Route for the Home screen
    3. Create HomeScreen.js
    4. Add product list code there
    5. Create ProductScreen.js for individual product info
    6. Add new route from product details to App.js
    7. Create 3 columns for product image, product info and action

9. Create Node.JS server with Express framework for backend
    1. Run npm init in the root folder
    2. Update package.json to set type: module
    3. Add .js to imports for Node server (i.e., import ./data.js)
    4. Install express with npm
    5. Create server.js
    6. Require express
    7. Create stub route for / which returns backend is ready
    8. Move products file data.js from frontend to backend
    9. Create stub route for /api/products
    10. Return products
    11. Run npm start
    12. Install nodemon with npm as a devDependency (--save-dev) for hot
        reloading of code. This way we don't have to stop and start our
        Node server after editing source files.
    13. Define 'start' script to run nodemon --watch ... --exec node .../server.js

10. Modify frontend react app to load products from the backend
    1. Set up proxy to the backend.
    2. Install axios library.
    3. Edit HomeScreen.js
    4. Use react hooks to set up some state: products variable.
    5. Define useEffect hook: runs when components did mount, after rendering.
    6. Define async fetchData function and then call it.
    7. Get data from /api/products.
    8. Show products in the list.
    9. Create the loading & error state hook variables.
    10. Create the Loading component.
    11. Create the Message Box component.
    12. Use these components in the HomeScreen.

11. Install ESLint for code linting
    1. Install eslint extension for your code editor.
    2. Install eslint as a devDependency for the root project. This package is
       already installed in the frontend folder. I guess we install it again for
       the root project so it is available to the entire package or the backend
       code.
    3. Run ./node_modules/.bin/eslint --init
    4. Create frontend/.env
    5. Add SKIP_PREFLIGHT_CHECK=true to the .env file.

12. Add Redux to the Home Screen
    1. Use npm to install redux & react-redux
    2. Create store.js
    3. initState = { products: [] }
    4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
    5. export default createStore(reducer, initState)
    6. Edit HomeScreen.js
    7. shopName = useSelector(state => state.products)
    8. const dispatch = useDispatch()
    9. useEffect(() => dispatch({type: LOAD_PRODUCTS, payload: data}))
    10. Add store to index.js.

13. Add Redux to product details screen
    1. Create product details constants, actions & reducers.
    2. Add product details reducer to store.js.
    3. Use action in ProductScreen.js.
    4. Add /api/product/:id to backen api.

14. Handle Add to Cart button
    1. Handle Add to Cart in ProductScreen.js.
    2. Create CartScreen.js.

15. Implement Add to Cart Action
    1. Create constants for AddToCart.
    2. Create action and reducer for AddToCart.
    3. Use our new action in the CartScreen.js.
    4. Add badge to the shopping cart indicating number items in cart.

16. Build Shopping Cart screen
    1. In CartScreen.js, create 2 columns: cart items and cart action.
    2. Modify the display if the cart is empty.
    3. Flesh out cart items: show item image, name, quantity and price.
    4. Implement the Proceed to Checkout button.
    5. Implement the Remove from Cart action.


## Front End React App

The front end of this website is a React app, which is in the frontend
subdirectory. Below is the README file installed by Create React App in the
frontend directory:

### Getting Started with Create React App ###

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts ####

In the project directory, you can run:

##### `yarn start` #####

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `yarn test` #####

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build` #####

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject` #####

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More ####

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `yarn build` fails to minify #####

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
