import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = ({description}) => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        <div className='descriptionbox-description'>
          <p>
            {description}  
          </p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox

