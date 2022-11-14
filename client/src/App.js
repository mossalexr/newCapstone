import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FoodDrink from './components/FoodDrink';
import Attractions from './components/Attractions';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/fooddrink" component={FoodDrink} />
            <Route path="/attractions" component={Attractions} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
