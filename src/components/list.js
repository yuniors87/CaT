import React from "react"
import styled from "styled-components"

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Item = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #273746;
  border-radius: 15px;
  cursor: pointer;
  margin: 7px;
  padding: 0 20px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  background: ${props => (props.activo ? "#008C7A" : "")};
  color: ${props => (props.activo ? "#EAEDED" : "#273746")};
  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.35);
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

function List({ tareas, seleccionarTarea }) {
  return (
    <StyledList>
      {tareas.map(tarea => (
        <Item
          key={tarea.valor}
          data-valor={tarea.valor}
          activo={tarea.activo}
          onClick={seleccionarTarea}
        >
          {tarea.nombre} ({tarea.valor})
        </Item>
      ))}
    </StyledList>
  )
}
export default List
