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
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin: 7px;
  padding: 0 15px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  background: ${props => (props.activo ? "lightgreen" : "red")};
`

const LabelItem = styled.p`
  margin: 0;
`

function List({ tareas, onClick, cambiar }) {
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    // props.onChange(event.target.value);
    console.log("click desde la lista")
    onClick(event.target.value)
    console.log(event.target.getAttribute("data-valor"))
  }
  return (
    <StyledList>
      {tareas.map(tarea => (
        <Item
          key={tarea.valor}
          data-valor={tarea.valor}
          activo={tarea.activo}
          onClick={cambiar}
        >
          {/* <LabelItem> */}
          {tarea.nombre} ({tarea.valor}){/* </LabelItem> */}
        </Item>
      ))}
    </StyledList>
  )
}
export default List
