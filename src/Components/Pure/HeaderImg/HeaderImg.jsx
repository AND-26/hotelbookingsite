import React from 'react'
import './HeaderImg.css'
import houseImg from '../../../assets/house.png'

export const HeaderImg = () => {
  return (
    <div className='header__img'>
        <img src={houseImg} alt="house" />
    </div>
  )
}
