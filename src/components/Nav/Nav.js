import React from 'react'
import './Nav.css'
import Link from '../Link/Link'


export default function Nav(props) {

    const links = [
        { title: 'CoinBase', url: 'https://www.coinbase.com/' },
        { title: 'CoinMarket', url: 'https://coinmarketcap.com/' },
        { title: 'Celsius', url: 'https://celsius.network/' },
      ];

  return (
    <nav>
        {links.map((lnk) => (
           <Link lnk = {lnk} key = {lnk.title}/>
        ))}
    </nav>
  )
}
