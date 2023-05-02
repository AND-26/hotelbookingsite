import React from 'react'
import { FacilitiesCard } from '../../Pure/FacilitiesCard/FacilitiesCard'
import mesasvg from '../../../assets/mesa.svg'
import parksvg from '../../../assets/park.svg'
import cafesvg from '../../../assets/cafe.svg'
import wifisvg from '../../../assets/wifi.svg'
import rayosvg from '../../../assets/rayo.svg'
import nadarsvg from '../../../assets/nadar.svg'
import gymsvg from '../../../assets/gym.svg'
import otrossvg from '../../../assets/otros.svg'
import './FacilitiesWrapper.css'

export const FacilitiesWrapper = () => {
  return (
    <div className='facilitieswrapper'>
        <FacilitiesCard img={mesasvg} text={'Private Workspace'}/>
        <FacilitiesCard img={parksvg} text={'Parking Area'}/>
        <FacilitiesCard img={cafesvg} text={'Breakfast'}/>
        <FacilitiesCard img={wifisvg} text={'Free Wifi'}/>
        <FacilitiesCard img={rayosvg} text={'Free Electricity'}/>
        <FacilitiesCard img={nadarsvg} text={'Swimming Pool'}/>
        <FacilitiesCard img={gymsvg} text={'Exercise Space'}/>
        <FacilitiesCard img={otrossvg} text={'Other Service'}/>
    </div>
  )
}
