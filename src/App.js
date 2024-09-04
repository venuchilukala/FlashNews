import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
//NewsApi Key : 9cd95f4cbfdc45a09d064b87246e6619

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/" element={<News key="general" country="us" pageSize={9} category="general"/>}/>
            <Route exact path="/business" element={<News key="business" country="us" pageSize={9} category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" country="us" pageSize={9} category="entertainment"/>}/>
            <Route exact path="/general" element={<News key="general" country="us" pageSize={9} category="general"/>}/>
            <Route exact path="/health" element={<News key="health" country="us" pageSize={9} category="health"/>}/>
            <Route exact path="/science" element={<News key="science" country="us" pageSize={9} category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" country="us" pageSize={9} category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" country="us" pageSize={9} category="technology"/>}/>
          </Routes>
        </Router>    
      </div>
    )
  }
}
