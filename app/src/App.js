import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Function} from "./components/Function";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Home/>
          <Function/>
      </div>
    );
  }
}

export default App;

