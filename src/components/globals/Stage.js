import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';


class Stage extends Component {
  render() {
    return (
      <div className="stage">
        <h6>Stage</h6>

        <Route exact path="/" component={Home}/>
        {/*<Route path="/about" component={About}/>
        <Route path="/works" component={Works}/> */}
        <Route path="/services" component={Services}/>
        {/*<Route path="/blog" component={Blog}/> */}
        <Route path="/contact" component={Contact}/>

      </div>
    )
  }
}

export default Stage;
