import React, {Component} from 'react'
import styled from 'styled-components'


// const animatedIte = keyframes`
//   0% {
//     font-size: 10px;
//   }
//   30% {
//     font-size: 15px;
//   }
//   100% {
//     font-size: 12px;
//   }
// `
const Item = styled.div`
  /* background: lightcyan; */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin: 7px;
  padding: 0 15px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
`

const LabelItem = styled.p`
  /* background: lightcoral; */
  margin: 0;
`

class ListItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.currentTarget.dataset.valor);
  }
  render() {
    return (
      <Item key={this.props.valor} onClick={this.handleClick} data-valor={this.props.valor}>
        <LabelItem>
          {this.props.nombre} ({this.props.valor})
        </LabelItem>
      </Item>
    )
  }
}
export default ListItem