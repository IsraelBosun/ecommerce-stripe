import React from 'react'

import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components/index.js"

const Home = ({  pwoducts, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>

      <div className='products-container'>
        {pwoducts?. map(
          (product) => product.name
        )}
      </div>

      <FooterBanner />
    </>
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }
}

export default Home