import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';
import Login from './components/Auth/login'
import Register from './components/Auth/register'
import FixedMenuLayout from './components/notice'


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Root= ()=>(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/notice" component={FixedMenuLayout} />
      
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
