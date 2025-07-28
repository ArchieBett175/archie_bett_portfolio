import React from 'react'

const ImageCarouselItem = ({ item, alt }) => {
  return (
    <div className='text-white'>
        <img src={item.imageLink} alt={alt} />
    </div>
  )
}

export default ImageCarouselItem