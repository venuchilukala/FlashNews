import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const country = "us";
  const apiKey = process.env.REACT_APP_FLASHNEWS_API;

  // Using useState hook to manage progress state
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={5} color='#f11946' progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                country={country}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                country={country}
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                country={country}
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                country={country}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                country={country}
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                country={country}
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                country={country}
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                country={country}
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


// import React, {Component} from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import News from './components/News'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {
//   pageSize = 15;
//   country = "us";
//   apiKey = process.env.REACT_APP_FLASHNEWS_API;
//   state = {
//       progress : 0
//   }
  
//   setProgress = (progress)=>{
//     this.setState({progress : progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar/>
//           <LoadingBar height={5} color='#f11946' progress={this.state.progress}/>
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country={this.country} pageSize={this.pageSize} category="general"/>}/>
//             <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country={this.country} pageSize={this.pageSize} category="business"/>}/>
//             <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country={this.country} pageSize={this.pageSize} category="entertainment"/>}/>
//             <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country={this.country} pageSize={this.pageSize} category="general"/>}/>
//             <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country={this.country} pageSize={this.pageSize} category="health"/>}/>
//             <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country={this.country} pageSize={this.pageSize} category="science"/>}/>
//             <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country={this.country} pageSize={this.pageSize} category="sports"/>}/>
//             <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country={this.country} pageSize={this.pageSize} category="technology"/>}/>
//           </Routes>
//         </Router>    
//       </div>
//     )
//   }
// }
