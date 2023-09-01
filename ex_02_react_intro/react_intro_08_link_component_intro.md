# Link from the "react-router-dom" library

A way to create links inside our documents.

It's like the NavLink thing, but instead of being a button is a simple link. It doesn't have as many attributes as NavLink, such as active and so on.

We can pick the links following this example: First we pass the data ` <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />` and then we output the link: ` <Link to={``/portfolio/${props.slug}``}>Link</Link> `

## Slugs

Links to particular content in the page. Also known as "Permalink". Example: `<Route exact path="/portfolio/:slug" component={PortfolioDetail} />`.

In react, it is necessary for the slugs to be set manually in the state:

```
this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: "eCommerce", slug: "quip" },
        { title: "Eventbrite", category: "Scheduling", slug: "eventbrite" },
        {
          title: "Ministry Safe",
          category: "Enterprise",
          slug: "ministry-safe"
        },
        { title: "SwingAway", category: "eCommerce", slug: "swingaway" }
      ]
    };
```

## Bad Links Protection:
In order to give a more informative 404, we set an emply route **at the end of the routes list**. Works kind of like an "else". If you didn't find any of the above, enter here.

It follows this example: `<Route component={NoMatch} />` and in "NoMatch" we create the custom error page.
