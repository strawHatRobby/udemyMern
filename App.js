import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NewsList from './components/NewsList'
import JSON from './db.json';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: JSON
        }
    }
  render() {
    return (
      <div className="App">
        <Header/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

export default App;
