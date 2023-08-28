# Architecture of React

Many people will call it a "framework" because it's very powerful, but in reality it's a JS Library.

It is component based, unlike Django. Every element (buttoms, thumbnails...) is a component and they are reusable. With this, instead of having many html templates, we only get 1  html file with all the separate components, but those components only get rendered if and when they are called by the app.

# Sections

## Source -> src

Is the pure React code that makes the app. It has a few dependencies inside [^1].

### Actions
Gives us access to the Redux. It's a unified place where we can store all of our data and access or query it orderly.

### Components
Key to the application. As we said, React works by creating many single components and then calling them when needed. This is the place where we store the components.
From the get-go you'll have the app.js component, which is the **parent component** and all of the other components will be nested inside this one.

### Styles
This is where we put our styling files, mainly scss and sass



### Other files:
**Bootstrap**: not the framework. This is just the entry point or the base JS file, where we load all the critical stuff, like the very "React" and other critical components.

[^1]: Some will be developed later on.