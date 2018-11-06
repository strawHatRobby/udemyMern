import React, { Component } from 'react';

class NewsList extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render(){
      const renderNews = this.props.news.map((item) => {
           return (
               <li key={item.id}>
              <h4>{item.title}</h4>
                  <p>{item.feed}</p>
              </li>
              )
          })
      
    return (
      <div> 
        
        <h1>News List</h1>
        <ul>
        {renderNews}
        </ul>
        </div>
    )
  }

}

export default NewsList;
