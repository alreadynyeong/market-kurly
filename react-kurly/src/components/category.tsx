import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Category() {
  const Container = styled.div`
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    height: 60px;
    clear: both;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 2px gray;
    > button {
      font-size: large;
      background: none;
      border: 0;
    }
    > div {
      font-size: small;
    }
  `
  const Cate = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    > button {
      font-size: large;
      background: none;
      border: 0;
    }
  `
  const Notice = styled.div`
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    border: 1px solid gray;
    border-radius: 30px;
    padding: 5px 10px;
    color: gray;
  `
  const Purple = styled.span`
    color: purple;
  `
 
  return (
    <Container>
        <button>
        <FontAwesomeIcon icon={faBars} />
            <span className="material-symbols-outlined">menu</span>
            카테고리
        </button>
        <Cate>
            <button>신상품</button>
            <button>베스트</button>
            <button>알뜰쇼핑</button>
            <button>특가/혜택</button>
        </Cate>
       
        <Notice><Purple>
            샛별・택배 
        </Purple>배송안내</Notice>
    </Container>
  )
}
