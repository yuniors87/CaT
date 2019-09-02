import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background: lightcyan;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin: 5px;
  padding: 5px;
`

const LabelItem = styled.p`
  background: lightcoral;
  margin: 0;
`

const ListItem = ({nombre, valor}) => (
  <Item key={valor}>
    <LabelItem>
      {nombre}({valor})
    </LabelItem>
  </Item>
)

export default ListItem