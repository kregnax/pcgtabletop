import React, { Component } from 'react';
import './App.scss';
import parse from './service/xml2js';
import xmlString from './service/testData';
import Basics from './sheet/basics';
import Status from './sheet/status';
import Abilities from './sheet/abilities';

class App extends Component {
  render() {
    var obj = parse(new DOMParser().parseFromString(xmlString, "text/xml"));
    console.log(obj);
    return (
      <div className="App">
      <Basics basics={obj.basics} />
      <Status status={obj} />
      <Abilities abilities={obj.abilities} />
        <pre>{JSON.stringify(obj, null, 5)}</pre>
      </div>
    );
  }
}

export default App;
