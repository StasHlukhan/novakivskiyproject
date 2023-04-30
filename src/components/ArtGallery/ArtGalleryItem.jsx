import React from 'react'
import './ArtGallery.css'
const ArtGalleryItem = ({art, onClick}) => {
  
  return (
    <div className='art_item'>
         <div  className="art_item_info"  onClick={onClick} >
        <img  src={art.img} alt="" />
       </div>
       
    </div>
  )
}

export default ArtGalleryItem