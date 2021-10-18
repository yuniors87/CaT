import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tarea2 from './tarea2';

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 15px;
`;

function ListaTareas2({ listaTareas }) {
  return (
    <StyledList>
      {listaTareas.map((tarea) => (
        <Tarea2 key={tarea.Codigo} tarea={tarea} />
      ))}
    </StyledList>
  );
}

ListaTareas2.propTypes = {
  listaTareas: PropTypes.string.isRequired,
};

export default ListaTareas2;
