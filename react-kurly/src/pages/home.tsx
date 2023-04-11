import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Top from '../components/top'
import Category from '../components/category'
import Products from '../components/product'

const Banner = styled.div`
    height: 379px;
`

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <>
    <Top/>
    <Category/>
    <Banner>
      <Slider {...settings}>
      <img src="https://placeimg.com/600/200/animals" />
      <img src="https://placeimg.com/600/200/animals" />
      <img src="https://placeimg.com/600/200/animals" />
      <img src="https://placeimg.com/600/200/people" />
      </Slider>
    </Banner>
    <Products title='이 상품은 어때요?'/>
    <Products title='요즘 뜨는 상품'/>
    
    </>
  )
}
