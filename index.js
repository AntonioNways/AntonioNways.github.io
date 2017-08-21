import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPane from './components/ProjectPane';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';

///DATA to pass down to Children////
var ProjectData= {"Dungeon Crawler":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzanZKbEJidURrM1E","link":"https://codepen.io/SilverAnt/full/PjVyLB/","detail": "A basic Dungeon Crawler game. Instructions: Travel the Dungeon an beat the boss in Dungeon level 4. (Note: Blue = Player, Red = enemy, Green = HP, Yellow = Weopen Upgrade, Purple = Move to next Dungeon)","type":"React" },
"Game of Life":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzNUl0cE9JV2EyMzg","link":"https://codepen.io/SilverAnt/full/yXjEKx/","detail": "A simple game with where you can click on a cell to turn it alive or dead. After each generation, the cells will either reproduce or die. For more rules of the game, please refer to https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life","type":"React" }, 
"Tic Tac Toe":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzOUM3ZnVvaXZQZDQ","link":"https://codepen.io/SilverAnt/full/EWOWvN/","detail": "A basic Tic Tac Toe game","type":"Other" },
"Simon's Game":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzY2ZEWmh6YTN6MjQ","link":"https://codepen.io/SilverAnt/full/JNERyJ/","detail": "A basic game to test your memory. Try to repeat the pattern given by the computer","type":"Other" },
"Force Directed Graph":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzMFFqREFfT2t1eFU","link":"https://codepen.io/SilverAnt/full/wqvKrz/","detail": "An interactive Force Directed Graph that connects countries by their borders. For fun, you can drag a country map around and view the effect on its neighbouring countries.","type":"D3" },
"Visualize Data with a Scatterplot Graph":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzdk8tazBid00tMVE","link":"https://codepen.io/SilverAnt/full/qjzGPQ/","detail": "An interactive scatterplot graph that shows the doping allegations of professional bicycle racing","type":"D3" },
"Calculator":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzcl9CWEt0enBtR1k","link":"https://codepen.io/SilverAnt/full/XMEREj/","detail": "A simple calculator App.","type":"Other" }
}
var allTabStat0={"allTabStat":["none","active","none","none"]}

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Checks to see if a redirect is required. There are two types of redirects:
// 1) specified in the query string generated by the 404 page
// 2) when the site is accessed at /my-repo-name
// This function checks for both types and calls the appropriate function
// to handle the redirect.
function checkForRedirect(nextState, replace) {
  const location = nextState.location;
  if (location.query.redirect === 'true') {
    parseRedirectQuery(location.query, replace);
  } else if (location.pathname.split('/')[1] === gitHubRepoName) {
    redirectToDomain();
  }
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Takes the redirect query string created in 404.html, converts it back into
// the correct url, then uses react-router to redirect to the correct url which
// loads the respective routes and components. When there is a fresh page
// load for a path that is defined with frontend routes, GitHub Pages will
// return the custom 404.html page, which then redirects back to just the
// base domain with a query string representing the attempted url, to which
// GitHub Pages returns index.html. The single page react app is loaded,
// this function is run, and the correct route is entered.
function parseRedirectQuery(query, replace) {
  let redirectTo = {}

  if (typeof query.pathname === 'string' && query.pathname !== '') {
    redirectTo.pathname = query.pathname;
  }

  if (typeof query.query === 'string' && query.query !== '') {
    let queryObject = {};
    query.query.split('&').map(q => q.split('=')).forEach(arr => {
      queryObject[arr[0]] = arr.slice(1).join('=');
    })
    redirectTo.query = queryObject;
  }

  if (typeof query.hash === 'string' && query.hash !== '') {
    redirectTo.hash = `#${query.hash}`
  }

  replace(redirectTo)
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Redirect for GitHub Pages from /my-repo-name to just the domain
// because GitHub Pages are always available at /my-repo-name even when a
// custom domain is in use. Accessing the site at /my-repo-name will
// cause the routing to break, so when the site is accessed at /my-repo-name,
// a redirect to the domain with no path is required.
// https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
// SET THIS: e.g. my-repo-name
const gitHubRepoName = 'AntonioNways.github.io';
// The domain for your site
// SET THIS: e.g. http://subdomain.example.tld, or http://www.example.tld
const domain = 'https://antonionways.github.io/';
function redirectToDomain() {
  window.location.replace(domain);
}
///////////////////////////////////////////////////////////////////////////////


const routes = (
  // onEnter hook checks if a redirect is needed before App component is loaded
  <Route path="/" mapMenuTitle="Home" component={App} onEnter={checkForRedirect}>
    <IndexRoute component={Home} /> // pass the component as a child


    <Route path="projects" mapMenuTitle="Projects" component={Projects}/>

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('AntPages')
)
