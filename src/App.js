import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

// imoport components
import Navbar from "./components/Navbar";

//Pages
import BeerListPage from "./pages/BeerListPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar routes={[
              {
                pathName: 'Beers',
                uri: '/beers'
              }
            ]} />
            <Switch>
              <Route path="/beers" component={BeerListPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
