import React from 'react'
import Link from "next/link"

import { urlFor } from "../lib/client"

const HeroBanner = ({ heroBanner: { smallText, midText, largeText1, image, desc, product } }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText} </h3>
        <h1>{largeText1} </h1>
        <img 
        className='hero-banner-image'
        src={urlFor(image)} alt="headphones" />
      </div>
      <Link href = {`/product/ID/${product}`}>
        <button type = "button">BUY NOW</button>
      </Link>
      <div className = "desc">
        <h5>Description</h5>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default HeroBanner