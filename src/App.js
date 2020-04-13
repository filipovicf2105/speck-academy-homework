import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/speakers" component={Speakers} />
      </Main>
    </>
  );
}

export default App;
