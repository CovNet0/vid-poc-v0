import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './upload/Upload'

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>
            Vidia POC Project v0
          </h1>
          <p>
            Work In Progress
          </p>
          <div className="Card">
            <Upload />
          </div>
        </div>
    )
  }
}

export default App
