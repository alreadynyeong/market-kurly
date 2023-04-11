import React, {useState} from 'react'
import styled from 'styled-components'

import Top from '../components/top'
import Category from '../components/category'
import { SignUpButton, PurpleButton } from '../components/button'

const Container = styled.div`
  text-align: center;
  align-items: center;
  width: 500px;
  margin: auto;
  margin-top: 100px;
`
const SignUP = styled.div`
  width: fit-content;
  margin: auto;
`
const Input = styled.div`
  display: flex;
  margin-bottom: 20px;
  > div > button {
    height: 45px;
    border: 1px solid purple;
    border-radius: 3px;
    background: none;
    color: purple;
    width: 100px;
  }
  > div > input {
    width: 350px;
    height: 40px;
    margin-right: 10px;
    padding-left: 10px;
  }
  > div > div > input {
    width: 350px;
    height: 40px;
    margin-right: 10px;
    padding-left: 10px;
  }
`
const Title = styled.div`
  width: 100px;
  line-height: 45px;
  text-align: left;
  margin-right: 15px;
`
const Red = styled.span`
    color: red;
  `
const Radio = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  > input[type=radio] {
    width: 50px;
  }
  > label {
    width: 300px;
    font-size: 15px;
    line-height: 45px;
  }
`

export default function Signup() {
  const [addinput, setAddinput] = useState('0');
  const [sex, setSex] = useState('0')

  const ChangeAddinput = (e: { target: { value: React.SetStateAction<string> } }) =>{
    setAddinput(e.target.value)
  }
  const ChangeSexinput = (e: { target: { value: React.SetStateAction<string> } }) =>{
    setSex(e.target.value)
  }
  return (
    <>
        <Top/>
        <Category/>
        <Container>
              <h2>회원 가입</h2>
            <SignUP>
              <hr/>
            <Input>
                <Title>아이디<Red>*</Red></Title>
                <div><input type="text" name="ID" placeholder="아이디를 입력해주세요"/></div>
                <div><SignUpButton text='중복확인' wid={100} /></div>
            </Input>
            <Input>
                <Title>비밀번호<Red>*</Red></Title>
                <div><input type="password" name="password" placeholder="비밀번호를 입력해주세요"/></div>
            </Input>
            <Input>
                <Title>비밀번호 확인<Red>*</Red></Title>
                <div><input type="passwordcheck" name="password" placeholder="비밀번호를 한번 더 입력해주세요"/></div>
            </Input>
            <Input>
                <Title>이름<Red>*</Red></Title>
                <div><input type="text" name="name" placeholder="이름을 입력해주세요"/></div>
            </Input>
            <Input>
                <Title>이메일<Red>*</Red></Title>
                <div><input type="text" name="mail" placeholder="예: marketkurly@kurly.com"/></div>
                <div><SignUpButton text='중복확인' wid={100} /></div>
            </Input>
            <Input>
                <Title>휴대폰<Red>*</Red></Title>
                <div><input type="text" name="tel" placeholder="숫자만 입력해주세요."/></div>
                <div><SignUpButton text='인증번호 받기' wid={100} /></div>
            </Input>
            <Input>
                <Title>주소<Red>*</Red></Title>
                <div><SignUpButton text='주소검색' wid={365} /></div>
            </Input>
            <Input>
                <Title>성별</Title>
                <Radio>
                <input type="radio" value="M" checked={sex==='M'} onChange={ChangeSexinput}/><label>남자</label>
                <input type="radio" value="F" checked={sex==='F'} onChange={ChangeSexinput}/><label>여자</label>
                <input type="radio" value="N" checked={sex==='N'} onChange={ChangeSexinput}/><label>선택안함</label>
                </Radio>
            </Input>
            <Input>
                <Title>생년월일<Red>*</Red></Title>
                <div><input type="text" name="birth" placeholder="YYYY / MM / DD"/></div>
            </Input>
            <Input>
                <Title>추가 입력 사항</Title>
                <Radio>
                <input type="radio" value="1" checked={addinput==='1'} onChange={ChangeAddinput} style={{width:'30px'}}/><label>친구초대 추천인 아이디</label>
                <input type="radio" value="2" checked={addinput==='2'} onChange={ChangeAddinput} style={{width:'30px'}}/><label>참여 이벤트명</label>
                </Radio>
                
            </Input>
            <Input>
              <Title/>
              {addinput=='0'? null:
                addinput=='1'? 
                <>
                  <div><input type="text" name="freindID" placeholder="추천인 아이디를 입력해 주세요."/></div>
                  <div><SignUpButton text='아이디확인' wid={100} /></div>
                </> : 
                <>
                     <div><input type="text" name="event" placeholder="참여 이벤트명을 입력해주세요."/></div>
                </>}  
            </Input>
            <PurpleButton text='가입하기' wid={240}/>
            </SignUP>
        </Container>
    </>
  )
}
