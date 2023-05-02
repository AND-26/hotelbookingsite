import React from 'react'
import { HotelWrapper } from '../../Container/HotelWrapper/HotelWrapper'
import './PopularHotels.css'

export const PopularHotels = () => {
  return (
    <div className='popularhotels'>
        <h1>Our most popular Hotels</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. <span>View All</span></p>
        <HotelWrapper/>
    </div>
  )
}
