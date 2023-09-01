# Intro to Routing
Even though React is a **S.P.A.: Single Page Aplication**, that refers to the coding structure. there is the capability to create web-apps with multiple pages.

For this we use the react router library. They are node modules (react-router and react-router-dom). 

In the project, Jordan imports it as an alias: `import { BrowserRouter as Router, Switch, Route } from "react-router-dom";` some inner elements are needed, such as "Switch" (not the coding switch) and "Router".

The routing will look like this:

``` <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>```