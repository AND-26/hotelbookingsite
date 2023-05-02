import React from 'react'
import { NavLink } from '../NavLink/NavLink'
import './FooterHome.css'

export const FooterHome = () => {
  return (
    <div className='footer_home'>
        <h2>Home</h2>
        <NavLink estilo={'navigation__link__footer'}/>
    </div>
  )
}
