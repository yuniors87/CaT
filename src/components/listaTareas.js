import React from 'react';
import styled from 'styled-components';
import Tarea from './tarea';

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 15px;
`;

function ListaTareas({ listaTareas, tareaSeleccionada }) {
  return (
    <StyledList>
      {listaTareas.map((tarea) => (
        <Tarea key={tarea.valor} tarea={tarea} tareaSeleccionada={tareaSeleccionada} />
      ))}
    </StyledList>
  );
}

export default ListaTareas;
