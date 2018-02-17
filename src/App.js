import React, { Component } from 'react';
// import './App.css';
import Home from './modules/home'


class App extends Component {
  componentDidMount(){
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
