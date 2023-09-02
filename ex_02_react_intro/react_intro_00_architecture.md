# Architecture of React

Many people will call it a "framework" because it's very powerful, but in reality it's a JS Library.

It is component based, unlike Django. Every element (buttoms, thumbnails...) is a component and they are reusable. With this, instead of having many html templates, we only get 1 html file with all the separate components, but those components only get rendered if and when they are called by the app.

# Sections

## Source -> src

Is the pure React code that makes the app. It has a few dependencies inside [^1].

### Actions

Gives us access to the Redux. It's a unified place where we can store all of our data and access or query it orderly.

### Components

Key to the application. As we said, React works by creating many single components and then calling them when needed. This is the place where we store the components.
From the get-go you'll have the app.js component, which is the **parent component** and all of the other components will be nested inside this one.

### Styles

This is where we put our styling files, mainly scss and sass.

## Static -> Static

It's where we put our files and elements that don't change, like images and icons as well as where the actual HTML file will be created, since browsers still work on HTML.

### Assets

The file where we actually store the assets like images and icons.

### index.html

The HTML file. The only thing you can see is the div **app-wrapper**. react will stick all the code we create here dynamically. We can still change the title and other metadata here.

### Other files:

**Bootstrap**: not the framework. This is just the entry point or the base JS file, where we load all the critical stuff, like the very "React" and other critical components.

**env.j**: it's a place where you can store information that you want hidden, like API Keys and so on. It has a couple file called "env.example.js" that can show the structure of it without the actual info. We can change the port for the localhost. Sometimes you want to do that in order to run several apps at the same time in case you're working on more than one.

**LICENSE**: specifies the license.

**package.json**: the ultimate configuration file, it stores multiple configuration elements. It's important to know that it works in _json_, so every string needs double-quotes **""**. It also needs to have no final comma in the last element to work. It works more or less like objects, with key-value pairs.
In the _"scripts"_ key we can find the actual commands that we get when we type _"npm run -command-"_.
It also contains a list of the dependencies the project needs to work and their versions.

**package-lock.json**: in the _"package-lock.json"_ we can find the metadata of the modules that we are actually using, because we can have small security updates and stuff and those get registered in the file. **Important** never touch the _"package-lock"_ file, it gets updated automatically.

**Prokfile**: sets some instructions for deployment.

**Server.js**: sets the conditions of what will be needed when getting the project to production.

**Return**: Just like in JS, the return value for components **only allows one return element**. So, it will only return a single JSX div per return statement. If you wanna return more than one element it will need to be all wrapped inside a parent div.

**Key**: a Key prop is a necessary way for react to track dynamically generated elements, for example, coming from an API. The key should be unique in order to avoid conflicts. Example: PortfolioItem **key={item.id}** title={item.name} url={item.url} slug={item.id}

[^1]: Some will be developed later on.
