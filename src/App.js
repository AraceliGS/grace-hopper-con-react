import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Aside from './components/Aside.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Aside/>  
      </div>
    );
  }
}

export default App;
