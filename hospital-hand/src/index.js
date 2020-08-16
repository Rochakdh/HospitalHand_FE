import React from 'react';
import ReactDOM from 'react-dom';


// import App from './components/App';
// import FixedMenuLayout from './components/notice'

import Form from './noticeform'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Root= ()=>(
  <Router>
    <Switch>
      <Route path="/" component={Form} />
      
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
