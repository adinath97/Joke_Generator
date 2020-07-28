import React from 'react';
import ReactDOM from 'react-dom';
import JokeFinder from './JokeFinder'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Ultimate Joke</h1>
        <JokeFinder />
      </div>
    );
  }
}

export default App;
