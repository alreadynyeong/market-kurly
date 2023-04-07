import React from 'react'
import styled from 'styled-components'

import Top from '../components/top'
import Category from '../components/category'
import Products from '../components/product'

const Banner = styled.div`
  background-color: cadetblue;
    height: 379px;
`
export default function Home() {
  return (
    <>
    <Top/>
    <Category/>
    <Banner/>
    <Products/>
    
    </>
  )
}
