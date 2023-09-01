# Intro to Routing

Even though React is a **S.P.A.: Single Page Aplication**, that refers to the coding structure. there is the capability to create web-apps with multiple pages.

For this we use the react router library. They are node modules (react-router and react-router-dom).

In the project, Jordan imports it as an alias: `import { BrowserRouter as Router, Switch, Route } from "react-router-dom";` some inner elements are needed, such as "Switch" (not the coding switch) and "Router".

The routing will look like this:

```<Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>
```

# NavLinks

The Router library has special "buttons" meant for routing called NavLinks. They have 2 of the following syntax:

```
<NavLink exact to="/">
    Home
</NavLink>

<NavLink to="/about-me">About<NavLink>
```

By using these NavLinks, we keep conforming to the react workins of working in a single page, it "mimics" what an <a> tag would do, without reloading the whole page.

They are recommended for internal links and <a> tags for external components.

Once rendered, NavLink gets object treatment and lot's of useful features, for example, it integrates the "active" attribute for the link where you are.
