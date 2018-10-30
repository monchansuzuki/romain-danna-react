import React, { Component } from 'react';
import './App.css';
import {Switch,BrowserRouter} from 'react-router-dom';
import Nav from "./component/Nav";
import {Route}from 'react-router-dom';
import NotFound from './component/NotFound'
import Home from './component/Home'
import Model from './component/Model'
import About from'./component/About'
import Music from './component/Music'
import Actor from './component/Actor'
import Contact from './component/Contact'

class App extends Component {
  render() {
    return (
        <BrowserRouter>

        <div className="App">
          <Nav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/model' component={Model}/>
                <Route path='/actor' component={Actor}/>
                <Route path='/music' component={Music}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound}/>
                <Route/>
            </Switch>
      </div>
        </BrowserRouter>

    );
  }
}

export default App;
