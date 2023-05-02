import React from 'react'
import './FacilitiesCard.css'

export const FacilitiesCard = ({img,text}) => {
  return (
    <div className='facilitiescard'>
          <img src={img} alt="imagen" />
          <p>{text}</p>
    </div>
  )
}
