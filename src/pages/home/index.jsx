import React from 'react'
import Slider from '../../component/home/Sliders'
import Category from '../../component/home/Category'
import Bannner from '../../component/home/Bannner'
import Product from '../../component/home/Product'
import Feature from '../../component/home/Feature'
import Popular from '../../component/home/Popular'
import BigBanner from '../../component/home/BigBanner'
import Brand from '../../component/home/Brand'
import Video from '../../component/home/Video'
import ProductWise from '../../component/home/ProductWise'
import SpeechToText from '../../component/SpeechToText'

const index = () => {
  return (
    <>
        <main className="main">
        {/* <SpeechToText /> */}
          <Slider />
          <Category />
          <Bannner />
          <Product title="Trending" />
          <Feature />
          <Popular />
          <BigBanner />
          <Brand />
          <Product title="Featured" />
          <Video />
          <ProductWise title="On sale" />
        </main>
    </>
  )
}

export default index
