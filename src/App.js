import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.scss';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Main>
        {!isLoggedIn
          ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          )
          : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/events" component={Events} />
              <Route path="/speakers" component={Speakers} />
              <Redirect to="/" />
            </Switch>
          )
        }
      </Main>
    </>
  );
}

export default App;
