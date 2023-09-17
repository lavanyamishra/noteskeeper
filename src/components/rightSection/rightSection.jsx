import React from 'react'
import mainImage from '../../images/image1.png'
import './rightSection.css'
const RightSection = () => {
  return (
    <div className='container'>
<div className='image-section'>
    <img  className="notesimage"src={mainImage}alt="imagehere" />
</div>
< div className="head-section">
<p className='phead'>Pocket Notes</p>
</div>
<div className="para-section">
<p className='ppara'>Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
    </div>
  )
}

export default RightSection