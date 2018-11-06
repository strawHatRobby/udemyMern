import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchTerm: ''
        
    }
      this.setInputVale = this.setInputVale.bind(this);
  }

    setInputVale(event) {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value 
        })
        console.log("the new value is " + this.state.searchTerm);
    }
  render(){
      const styles = {
          
          header: {
              background: '#03a9f4',
              padding: '10px'
          },
          logo: {
              color: '#fff',
              fontFamily: 'Anton',
              textAlign: 'center'
          }
      }

    return (
      <div className="app-header">
        <header style={styles.header}>
        <h1 style={styles.logo}>Welcome</h1>
        <label>Search </label>
       <input type="text" onChange={this.setInputVale}/> 
        <h3>{this.state.searchTerm}</h3>
        </header>
        
        </div>
    )
  }

}

export default Header;
