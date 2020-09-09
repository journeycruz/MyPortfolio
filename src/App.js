import React from 'react';
import './App.scss';
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
  
function App() {

  return (
      <div className="App">
          <div>
          <Header homeLink="/" logo="symbol-dark" color="color-black" />
          <BrowserRouter>
            <Switch>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
          </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
