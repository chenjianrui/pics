import React, { Component } from 'react'

class SearchBar extends Component {
  state ={
    term: ''
  }

  handleInputSubmit = e => {
    e.preventDefault()
    this.props.handleSearchSubmit(this.state.term);
    this.setState({
      term:''
    })
  }
  handleInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }
  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleInputSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input  type="text" value={this.state.term} onChange={this.handleInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar