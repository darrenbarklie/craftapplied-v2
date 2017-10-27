import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group/Transition';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';









class Stage extends Component {
  render() {
    return (
      <div className="stage">
        <h6>Stage</h6>

        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>

        </Switch>


      </div>
    )
  }
}

export default Stage;
