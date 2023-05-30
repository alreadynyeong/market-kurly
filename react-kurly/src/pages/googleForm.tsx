import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const Title = styled.p`
    margin: 0 auto;
    width: fit-content;
    padding-top: 20px;
`
const Text = styled.span`
    color: green;
    font-size: 14px;
`
const Form = styled.form`
    width: 200px;
    margin: 0 auto;
`
const Input = styled.input`
    margin: 10px;
    padding-left: 10px;
    width: 200px;
    height: 30px;
    color: green;
    border-radius: 5px;
    border: solid 1px green;
`
const Button = styled.button`
    margin: 10px;
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background-color: white;
    color: green;
    border: solid 1px green;
`
export default function GoogleForm() {
    const { register, watch, handleSubmit } = useForm();
    // console.log(watch());
    const onVaild = (data: any) => {
        console.log(data);
    };
    return (
        <>
        <Title>
            나의 첫 <Text>react-hook form</Text>
        </Title>
        <Form onSubmit={handleSubmit(onVaild)}>
            <Input {...register('id')} placeholder="학번을 입력하세요"/>
            <Input {...register('name')} placeholder="이름을 입력하세요" />
            <Input {...register('phone')} placeholder="번호를 입력하세요" />
            <Input {...register('email')} placeholder="이메일을 입력하세요" />
            <Button>제출</Button>
        </Form>
        </>
    )
}