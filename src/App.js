import React, { Component } from 'react';
import './App.scss';
import parse from './service/xml2js';
import xmlString from './service/testData';
import Basics from './sheet/basics';

class App extends Component {
  render() {
    var obj = parse(new DOMParser().parseFromString(xmlString, "text/xml"));
    console.log(obj);
    return (
      <div className="App">
      <Basics basics={obj.basics} />
        <pre>{JSON.stringify(obj, null, 5)}</pre>
      </div>
    );
  }
}

export default App;
