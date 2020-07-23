import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import User from '../src/Component/User';

class App extends Component {
  constructor(){
    super();

    this.state = {

    };
  }

  handleChange(value) {
    this.setState({});
  }

  render(){
    return (
      <div>
        <User/>
        
      </div>
    );
  }

}



export default App;
