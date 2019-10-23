import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  display: block;
  margin: 40px auto;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #e67e22;
  color: #ecf0f1;
  transition: background-color .3s;
  &:hover{
    background-color: #d35400;
  }
  &:focus{
    background-color: #d35400;
  }
  & span {
    display: block;
    padding: 12px 24px;
    font-size: 16px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, .3);
    transform: translate(-50%, -50%);
  }
  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
  }
}
`;

const Button = ({ name, click }) => (
  <StyledButton onClick={click}><span>{name}</span></StyledButton>
);


export default Button;
