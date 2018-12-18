import React, { Component } from 'react'

class ImageCard extends Component {
  state = {
    spans: 0
  }
  imageRef = React.createRef();

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  setSpans = e => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({spans})
  }
  render () {
    const { urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular}/>
      </div>
    )
  }
}

export default ImageCard