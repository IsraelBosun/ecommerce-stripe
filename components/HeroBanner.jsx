import React from 'react'
import Link from "next/link"

import { urlFor } from "../lib/client"

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText} </h3>
        <h1>{heroBanner.largeText1} </h1>
        <img 
        className='hero-banner-image'
        src={urlFor(heroBanner.image)} alt="headphones" />
      </div>
      <Link href = {`/product/ID/${heroBanner.product}`}>
        <button type = "button">BUY NOW</button>
      </Link>
      <div className = "desc">
        <h5>Description</h5>
        <p>DESCRIPTION</p>
      </div>
    </div>
  )
}

export default HeroBanner