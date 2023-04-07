import React from 'react'
import Clover from '../image/clover.jpg'
import styled from 'styled-components'

const StyledProducts = styled.div`
    text-align: center;
    margin-top: 50px
    
`
const StyledProduct = styled.div`
    text-align: left;
    display: inline-block;
    width: 250px;
    margin: 10px;
    > img {
        width: 249px;
        height: 320px;
    }
    > div {
        margin-top: 5px;
    }
`
const Product = () => {
    return(
        <StyledProduct>
            <img src={Clover}/>
            <div>[미녕] 에어프라이어 수제 클로버 튀김 100g</div>
            <div>20,190,983원</div>
            <div>
             <span className="material-symbols-outlined">sms</span>
            후기
             </div>
        </StyledProduct>
    )
}

export default function Products() {
  return (
    <StyledProducts>
        <h2>이 상품 어때요?</h2>
        <Product/>
        <Product/>
        <Product/>
    </StyledProducts>
    
  )
}
