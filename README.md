This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Using SASS

### `npm install sass-loader node-sass --save-dev`

 Adding Sass to your create-react-app project will require you to execute the eject command.  Also from the root of the project:
 
###  `npm run eject`
 
 After the command completes successfully, locate the config folder which contains the two WebPack configuration files.  Each of these files corresponds to a specific development environment - dev (development) or prod (production).  Open the webpack.config.dev.js configuration file and find the loaders block in the module block.

 In WebPack, loaders (loaders, loaders) allow developers to do "pre-processing (pre-process)" before they are needed or will be loaded.  create-react-app uses many boot loaders to handle various build tasks, such as transpiling with babel, and automatic prefixing with PostCSS.  In order to connect Sass to your project, you need to add a loader that can process Sass files.

 ### The beginning of the loaders block should look something like this:
 
 `loaders: [
  // Process JS with Babel.
  {
    test: /\.js$/,
    include: paths.appSrc,
    loader: 'babel',
    query: require('./babel.dev')
  },
  ...`
  
  # After starting the loaders array, you can add your loader.  The Sass bootloader that we installed can process both Sass and Scss files.

 ## For Sass:
 
 
` {
  test: /\.sass$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
},`


## For Scss:


`{
  test: /\.scss$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
},`

Now that the Sass bootloader is in place, you can use Sass files. 
For example, in the App.js component, which comes by default with create-react-app, you can write:

###   `import './App.sass';`

Please note that you must also rename your App.css file to App.sass.
