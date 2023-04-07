import React from 'react'
import styled from 'styled-components'
import Top from '../components/top'
import Category from '../components/category'
import {PurpleButton, PurpleLineButton} from '../components/button'
import { Link } from 'react-router-dom'

const Container = styled.div`
    text-align: center;
    align-items: center;
    width: 500px;
    margin: auto;
    margin-top: 100px;
`
const Logindiv = styled.div`
    width: fit-content;
    margin: auto;
`
const Input = styled.input`
    width: 330px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;
    &: focus {
        outline: solid;
    }
`
const StyledDiv = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin-bottom: 50px;
    > a{
        text-decoration: none;
        color: black;
    }
`
const StyledLink = styled.div`
    > a{
        text-decoration: none;
    }
`
export default function Login() {
  return (
    <>
        <Top/>
        <Category/>
        <Container>
            <h2>로그인</h2>
            
            <Logindiv>
                <StyledDiv className="loginInput">
                    <Input type="text" name="usermame" placeholder="아이디를 입력해주세요"/>
                    <Input type="password" name="passwd" placeholder="비밀번호를 입력해주세요"/>
                </StyledDiv>
                <StyledLink><Link to='/'>아이디 찾기</Link><a> | </a><Link to='/'>비밀번호 찾기</Link> </StyledLink>  
                <StyledDiv>
                    <PurpleButton text='로그인' wid={340}/>
                    <Link to='/signup'><PurpleLineButton text='회원가입' wid={340}/></Link>
                </StyledDiv>
                
            </Logindiv>
        </Container>
    </>
  )
}
