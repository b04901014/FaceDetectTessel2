import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
    };
    this._capture = this._capture.bind(this)
	}
  _capture() {
    fetch('http://192.168.1.198:8888/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then(responseJson   => {
        this.setState({screenshot: responseJson.result })
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NTUEE ESLab HW2 Demo</h1>
        </header>
        <p className="App-intro">
          {this.state.screenshot ?
            <img id="result"
                 width="640" height="480"
                 src={this.state.screenshot} /> : null}

        </p>
      </div>
    );
  }
}

export default App;
