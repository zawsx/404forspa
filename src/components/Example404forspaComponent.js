import React from 'react';import Interactive from 'react-interactive';import { Switch, Route, Link } from 'react-router-dom';import s from '../styles/exampleComponent.style';
import PageNotFound from './PageNotFound';import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';

const Example404forspaPageText = () => (<p style={s.p}>This is a 404forspa example page. Refresh the page or copy/paste the url to test out the redirect functionality (this same page should load
      after the redirect). </p>);

export default function Example404forspaComponent() {
  return (<Switch>
      <Route exact path="/example/two-deep"  render={({ location }) => (<div><Example404forspaPageText /><ExampleTwoDeepComponent location={location} /></div> )} />
      <Route exact path="/example"           render={() => 
	     (<div><Example404forspaPageText />
		    <div style={s.pageLinkContainer}>
		      <Interactive as={Link} {...s.link} to="/example/two-deep?field1=foo&field2=bar#boom!" >Try this: Example two deep with query and hash</Interactive>
		    </div>
	      </div> )} />
      <Route exact path="/example404forspa"  render={() => 
	     (<div><Example404forspaPageText />
		    <div style={s.pageLinkContainer}>
		      <Interactive as={Link} {...s.link} to="/example/two-deep?field1=foo&field2=bar#boom!" >Try this too: Example two deep with query and hash</Interactive><br />
		      <Interactive as={Link} {...s.link} to="/example" >Try this Example also</Interactive>
		    </div>
	      </div> )} />
	  <Route component={PageNotFound} />
    </Switch>
  );
}