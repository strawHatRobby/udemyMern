import React, { Component } from 'react';

class NewsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render(){
    return (
               <li key={this.props.item.id}>
              <h4>{this.props.item.title}</h4>
                  <p>{this.props.item.feed}</p>
              </li>
    )
  }

}

export default NewsItem;
