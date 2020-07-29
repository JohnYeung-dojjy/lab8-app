import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apitext: '' };
  }
componentDidMount() {
fetch("https://qly8axnqja.execute-api.us-east-1.amazonaws.com/default/hello-world")
.then(res => res.json())
.then(
  (result) => {
      this.setState({
        apitext: result.text
      });
  });
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.apitext}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
  }

export default App;
