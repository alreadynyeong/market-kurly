import React from 'react'
import styled from 'styled-components'

const StyledPurpleButton = styled.div`
    margin: auto;
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: large;
    border-radius: 3px;
    margin-top: 20px;
    border: 1px solid purple;
    background-color: purple;
    color: white;
}
`
const StyledPurpleLineButton = styled.div`
    margin: auto; 
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: large;
    border-radius: 3px;
    margin-top: 20px;
    border: 1px solid purple;
    background-color: white;
    color: purple;
}
`
const StyledSignUpButton = styled.div`
  text-align: center;
  line-height: 42px;
  height: 42px;
  font-size: medium;
  border-radius: 3px;
  border: 1px solid purple;
  background-color: white;
  color: purple;
`
interface ButtonProps {
    text?: string;
    on?: string;
    wid?: number;
}

export const PurpleButton = ({
    text,
    on,
    wid,
    ...props
  }: ButtonProps) => {
    return (
      <StyledPurpleButton
      style={{width:`${wid}px` }}>
        {text}
      </StyledPurpleButton>
    );
};
  export const PurpleLineButton = ({
    text,
    on,
    wid,
    ...props
  }: ButtonProps) => {
    return (
      <StyledPurpleLineButton
      style={{width:`${wid}px` }}>
        {text}
      </StyledPurpleLineButton>
    );
};
export const SignUpButton = ({
  text,
  on,
  wid,
  ...props
}: ButtonProps) => {
  return (
    <StyledSignUpButton
    style={{width:`${wid}px` }}>
      {text}
    </StyledSignUpButton>
  );
};
  