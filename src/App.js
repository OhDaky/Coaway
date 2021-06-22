import React, { useState, useEffect } from 'react'
import LoadingScreen from 'react-loading-screen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Nav' 
import Main from './Pages/Main'

import './App.css';

function App() {
  return (
    /* loading page */
    // <LoadingScreen
    //   loading={true}
    //   bgColor="#52B7FE"
    //   spinnerColor="#f4f4f4"
    //   textColor="#ffffff"
    //   text="COAWAY  로딩중..."
    // >
    // </LoadingScreen>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
