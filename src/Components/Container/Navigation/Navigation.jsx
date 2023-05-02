import React from 'react'
import { LoginBtn } from '../../Pure/LoginBtn/LoginBtn'
import { Logo } from '../../Pure/Logo/Logo'
import { NavLink } from '../../Pure/NavLink/NavLink'
import './Navigation.css'

export const Navigation = () => {
  return (
    <div className='navigation'> 
    <Logo />
    <NavLink estilo={'navigation__link'}/>
    <LoginBtn/>
    </div>
  )
}
