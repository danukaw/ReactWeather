var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundations-sites
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!ApplicationStyles');

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <route path="/" component={Main}>
      <route path="about" component={About}/>
      <route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </route>
  </Router>,
  document.getElementById('app')
);
