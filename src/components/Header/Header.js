import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css' 

export default function Header(props) {
 
  return (
    <header className='masthead'>
        <h1>{props.company}</h1>
        <Nav />
    </header>
  )
}
