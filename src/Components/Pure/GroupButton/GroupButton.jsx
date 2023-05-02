import React from 'react'
import './GroupButton.css' 

export const GroupButton = ({img,title,text,estilo}) => {
  return (
    <div className={estilo}>
      <p><img src={img} alt="location_icon" />{title} <br /> <span>{text}</span></p>
    </div>
  )
}
