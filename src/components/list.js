import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  /* background: lightgreen; */
  /* display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, auto) );
  grid-gap: 10px; */
  display: flex;
  flex-wrap: wrap;
`

const List = ({children}) => (
  <StyledList>
    {children}
  </StyledList>
)

export default List;