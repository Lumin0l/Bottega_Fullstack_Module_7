# Deep Dive

react works by building up separate components and then unifying them in a singular file. That is considered good because it generates a very well structured system, and things can be added with very little interference with the other elements.

There is different types of components:

**Import**: default exports can go alone, but if we export const or other var-types, they need to be in { }. Example: import { functional-component } from "path-to-component";
**Functional Components**: or _dumb components_, such as buttons and so on, they have small specific functionalities, and most importantly, they don't have **state**. Just returns some JSX code. It only needs to import React form "react" and that is it.
**State**: tracks the user behaviour as they navigate the webpage. They can track if they are in the home section or not, they update the values, keep a log of how much time they spent...
**Class Base Components**: they have state, they allow complex behaviours.
**This**:
**Props**: short for properties, they are an object that lists the properties of an element. Can be created or default. They set data related to an element and that data can be passed to different parts of the prject. That way we can use the same component name, but set different values. For example: if we have a component for "prize" and that sets the styles and the way in which it will behave, we can set the value of the prize as a prop each time we need to use it like: "< prize value="14" />" "< prize value="16" />"...
