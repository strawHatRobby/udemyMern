import React, { Component } from 'react';
import NewsItem from './NewsItem';

class NewsList extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render(){
      const styles={
          ul: {
              'list-style-type': 'none',
              'text-align': 'left'
          }
      }
      const renderNews = this.props.news.map((item) => {
           return (
                <NewsItem item={item}/>
              )
          })
      
    return (
      <div> 
        
        <h1>News List</h1>
        <ul style={styles.ul}>
        {renderNews}
        </ul>
        </div>
    )
  }

}

export default NewsList;
