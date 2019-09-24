import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 45px;
  display: inline-block;
  border: 2px solid #bfc9ca;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.2rem;
  text-align: center;
  max-width: 180px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  &:focus {
    border: 2px solid #95a5a6;
  }
  @media (max-width: 768px) {
    max-width: 120px;
    font-size: 1rem;
  }
`;

function Input({ valor, cambiar }) {
  return (
    <StyledInput
      type="number"
      value={valor === 0 ? '' : valor}
      onChange={(e) => {
        cambiar(e);
      }}
      placeholder={0}
    />
  );
}

export default Input;
