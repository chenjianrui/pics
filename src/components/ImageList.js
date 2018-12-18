import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'
const ImageList = (props) => {
  console.log(props.images)
  const imageList = props.images.length ? props.images.map(image => (<ImageCard key={image.id} image={image}/>)) : <p>Loading</p>
  return (
    <div className="image-list">
      {imageList}
    </div>
  )
}

export default ImageList