import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Function} from "./components/Function";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Body/>
          <Function/>
      </div>
    );
  }
}

export default App;


