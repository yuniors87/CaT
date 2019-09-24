import React from 'react';
import styled from 'styled-components';

const StyledTarea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid #273746;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  background: ${(props) => (props.activo ? '#008C7A' : '')};
  color: ${(props) => (props.activo ? '#EAEDED' : '#273746')};
  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-grow: 1;
  }
`;

const StyledTag = styled.p`
  display: inline-block;
  margin: 8px 15px;
  font-size: 1rem;
`;

function Tarea({ tarea, tareaSeleccionada }) {
  return (
    <StyledTarea activo={tarea.activo} onClick={() => tareaSeleccionada(tarea.valor)}>
      <StyledTag>
        {`${tarea.nombre} ${tarea.valor}`}
      </StyledTag>
    </StyledTarea>
  );
}

export default Tarea;
