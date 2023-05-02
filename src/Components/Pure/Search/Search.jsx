import React from 'react'
import './Search.css'

export const Search = ({img,text}) => {
  return (
    <div className='search'>
        <p><img src={img} alt="lupa" /> {text} </p>
    </div>
  )
}
