import React from 'react';import Interactive from 'react-interactive';import { Switch, Route } from 'react-router-dom';import Home from './Home';
import PageNotFound from './PageNotFound';import Breadcrumbs from './Breadcrumbs';import s from '../styles/app.style';
import ExampleComponent from './ExampleComponent';import Example404forspaComponent from './Example404forspaComponent';

export default function App() {return (<div style={s.root}><h1 style={s.title}>Single Page App framework for GitHub Pages</h1>
  <Interactive as="a" href="https://github.com/zawsx/404forspa" style={s.repoLink} {...s.link}  >https://github.com/zawsx/404forspa</Interactive>

    <nav style={s.breadcrumbs}><Breadcrumbs /></nav>

    <Switch><Route exact path="/" component={Home} />
      <Route path="/example" component={ExampleComponent} />
      <Route path="/example404forspa" component={Example404forspaComponent} />
      <Route component={PageNotFound} /></Switch>

    <div style={s.creditLine}><Interactive as="a" href="http://www.rafaelpedicini.com" interactiveChild  focus={{}}  touchActive={{}} touchActiveTapOnly>
        App.js comment:Code and concept by <span {...s.childLink}>Rafael Pedicini</span></Interactive></div></div>);}
