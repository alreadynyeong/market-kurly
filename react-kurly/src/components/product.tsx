import React, { useState } from 'react'
import Clover from '../image/clover.jpg'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin-top: 50px
`

const StyledProducts = styled.div`
    display: flex;
    overflow: auto;
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
    // const [move, setMove] = useState(0);

    // const leftMove = () => {
    //     if(move === 0 ){
    //         return;
    //     }
    //     setMove((prev) => prev+80);
    // }
    // const rightMove = () => {
    //     setMove((prev) => prev-80);
    // }
  return (
    <Container>
        <h2>이 상품 어때요?</h2>
        {/* <div>
                <button onClick={leftMove}>left</button>
                <button onClick={rightMove}>right</button>
            </div> */}
        <StyledProducts
            // style={{ transform: `translateX(${move}%)` }}
            >
            
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </StyledProducts>
    </Container>
    
  )
}
