import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'

//NewsApi Key : 9cd95f4cbfdc45a09d064b87246e6619

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
