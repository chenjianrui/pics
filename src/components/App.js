import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends Component {

  handleSearchSubmit(term){
    axios.get(`https://api.unsplash.com/search/photos`, {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID dee4fdabd832628c59f2103d9dfe09fb3aed9231bf39417ea4ba44d04c9dd9e1'
      }
    })
      .then(response => console.log(response))
  }
  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
      </div>
    )
  }
}

export default App