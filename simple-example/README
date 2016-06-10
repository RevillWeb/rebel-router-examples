# Getting started with rebel-router

This short tutorial will show you how easy it is to get up and running with the rebel-router. You will create the worlds simplest web app with three pages.

# 1. Set-up

Because the rebel-router is designed for ultra-modern applications and is written in ES2015 there are a few set-up steps we must do so we are able to package and transpile our application for use on today's browsers.

##Project folder

First of all create your project in an empty directory called "simple-example". Have a terminal window open at this directory ready for subsequent steps.

<div align="center">
<img src="http://i.imgur.com/WlrAL3p.png" alt="terminal window" />
</div>

##npm

First we will create a `package.json` file for our project. At the terminal within the `simple` directory run the following command and follow the instructions, for the sake of this tutorial all the defaults are fine:

`npm init`

You should now have a `package.json` file within the `simple` directory that looks something like this:

```javascript
{
  "name": "simple",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

Before we go any further lets ensure we have everything installed that we need.

###babel

To perform the transpilation we are going to use babel so lets install it and a few other modules:

`npm install babel babel-loader babel-preset-es2015 --save-dev`

###webpack

To package out little app when complete we will use webpack, which will also initiate the babel transpilation process for us too.

`npm install webpack --save-dev`

###rebel-router

Finally of course we need to install the router itself, this is equally as simple. Run the following command.

`npm install rebel-router --save`

## 2. App Structure

Open your project directory in your favourite IDE and lets start to build our app.

<div align="center">
<img src="http://i.imgur.com/DluAa1S.png" alt="IDE" />
</div>

So we don't have to remember complicated commands to run when we want to package our application we can add a few config files to our project now. Create a blank file called `.babelrc` and add the following contents. Create a blank file called `webpack.config.js` and add the following contents.

```javascript
module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

```

Next we need to create a `src` directory a `dist` directory and a blank `index.html` file within the root of our project folder. Then within the `src` directory create a blank `index.js` file.

<div align="center">
<img src="http://i.imgur.com/3S4ylyL.png" alt="File structure" />
</div>

## 3. Creating your pages

We are going to have three pages in our app. A home, about and contact page. Under the `src` directory create a sub-directory called `pages` and within this create a separate JS file for each page - home.js, about.js and contact.js.

<div align="center">
<img src="http://i.imgur.com/b8ZVo6K.png" alt="Pages" />
</div>

Each page is going to be its own web component. This means we create a re-usable and portable component that contains the styles, markup and controller code for each of our pages. Add the following code to the `home.js` file.

```javascript
export class HomePage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `<p>This is the home page.</p>`;
    }
}
```

Notice the `export` keyword, this will allow us to use the ES2015 module feature and import this class when we want to use it with the router.

Repeat this process for `about.js` and `contact.js` changing the class names appropriately (i.e. AboutPage & ContactPage).

## 4. Configure the router

Now we have three pages (or views) we can set-up the router to display these pages depending on what URL the user goes to.

Within the `index.js` file add the following code.

```javascript
//The router
import {RebelRouter} from '../node_modules/rebel-router/src/rebel-router.js';
//Our pages
import {HomePage} from './pages/home.js';
import {AboutPage} from './pages/about.js';
import {ContactPage} from './pages/contact.js';

let MainRouter = new RebelRouter("main-router");
MainRouter
    .add("/about", AboutPage)
    .add("/contact", ContactPage)
    .setDefault(HomePage);
```

The above code will first of all import the router from within node modules for use in our application. It will then import the three pages we have just created.

After this we create a new instance of the router and give it a unique name in this case `main-router`. Not that the name must be a valid element (i.e. contain a hyphen).

With the new instance of the router we use the `.add()` method to configure a URL route and provide the router with out page classes. We use the `.setDefault()` method and provide the HomePage class to be the fallback route.

All we need to do to finish this application is add some markup to our `index.html` page.

## 5. Writing the HTML

In our simple app we need some way so the user can navigate to the three pages we have just created. We also need to tell the rebel-router where to render the instance we have just created and configure. To do all this add the following code to `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rebel-router simple example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/webcomponents.min.js"></script>
    <script src="dist/bundle.js"></script>
</head>
<body>
    <nav>
        <a href="#/">Home</a> | <a href="#/about">About</a> | <a href="#/contact">Contact</a>
    </nav>
    <main>
        <rebel-router name="main-router"></rebel-router>
    </main>
</body>
</html>
```

Notice that we included the [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) pollyfills to support older browsers and also a `bundle.js` file which we haven't created yet.

## 6. Bundling the application

Before our little app will run in today's browsers we need to bundle and transpile our code. Thanks to the webpack configuration file we added earlier all we need to do is run the following command from the terminal within the project directory.

<div align="center">
<img src="http://i.imgur.com/llJRHDo.png" alt="webpack" />
</div>

Webpack will then bundle and transpile all our code using babel into the `dist/bundle.js` file - **and we are ready to go!**

## 7. Running the application

We can now run this application form a web server. If you don't already have the means to do that you can install the http-server node module with `npm install http-server` and then serve our app from the root of the project director by running `http-server`.

<div align="center">
<img src="http://i.imgur.com/lyfJruu.png" alt="HTTP Server" />
</div>

This will give you a URL and port to navigate to in your browser and there you should see your little app running with the ability to navigate to the three pages we created.

<div align="center">
<img src="http://i.imgur.com/7FfyGfV.gif" alt="Complete!" />
</div>