import React from 'react'
import './FooterHelpApp.css'


export const FooterHelpApp = ({subtitulo,lista,estilos}) => {
  return (
    <div>
       <h2>{subtitulo}</h2>
       <ul key={lista.id} className={estilos}>{lista.map((list) => {
        return <li>{list}</li>
       })}</ul>
      
    </div>
  )
}
