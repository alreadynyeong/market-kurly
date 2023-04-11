import React from 'react'
import styled from 'styled-components'

import Top from '../components/top'
import Category from '../components/category'

export default function Signup() {
  return (
    <>
        <Top/>
        <Category/>
        <div>
            <div>
                <h2>회원 가입</h2>
            </div>
            <div>
            <div id="input">
                <div id="inputTitle">아이디<span id="star">*</span></div>
                <div><input type="text" name="ID" placeholder="아이디를 입력해주세요"/></div>
                <div><button id="checkbtn">중복확인</button></div>
            </div>
            </div>
        </div>
    </>
  )
}
