# Intro to JSX

It looks very similar to HTML, but not quite.
It is the simplified language in which react creates elements. It gets compiled before rendering.

So when we type:
<PortfolioItem  />
What is actually happening in JS is:
<React.createElement(PortfolioItem, null);>

And when we type:
<PortfolioItem title="Quip" url="google.com" />
What is happening is:
<React.createElement(PortfolioItem, {title: "Quip", url: "google.com"});>
