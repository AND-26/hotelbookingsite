import React from 'react'
import { FooterHelpApp } from '../../Pure/FooterHelpApp/FooterHelpApp'
import { FooterHome } from '../../Pure/FooterHome/FooterHome'
import { FooterRedes } from '../../Pure/FooterRedes/FooterRedes'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <FooterRedes/>
        <FooterHome/>
        <FooterHelpApp subtitulo={'Help'} lista={['About Us','Help center','Privacy policy','FAQs']} estilos={'estilo_help'}/>
        <FooterHelpApp subtitulo={'Get the app'} lista={['Ios app','Android app']} estilos={'estilo_app'}/>
    </div>
  )
}
