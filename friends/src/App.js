import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';

import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
    .then(res=> {
      localStorage.removeItem("token");
      window.location.href = "/login";
    })
    .catch(err=> {
      console.log(err);
    })
  };


  return (
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link onClick={logout}>Logout</Link>
          </li> */}
          <li>
            {localStorage.getItem("token")?<Link to="/friendList">FriendLists</Link>:<div>Please Log in</div>}
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/friendList" component={Friends} />
          {/* <Route exact path="/friendList" component={Friends} /> */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
