import React, { Component } from "react"
import styled from "styled-components"

import List from "./list"
// import Qsoft from "../sistemas/qsoft"

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
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
`

class Calculador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tareas: props.tareas,
      valorActual: 0,
    }
    this.seleccionarTarea = this.seleccionarTarea.bind(this)
  }
  componentDidMount() {
    this.limpiarLista()
  }
  limpiarLista() {
    const nuevaLista = this.state.tareas.map(tarea => {
      return { ...tarea, activo: false }
    })
    this.setState({ tareas: nuevaLista })
  }

  calcularTareasValor(menoresTarget, valor) {
    //recive las tareas menores al valor seleccionado,
    //resta al valor recibido el maximo de las tareas menores
    //vuelve a restar el mayor al resto, siempre y cuando la siguiente tarea sea menor o igal al resto
    // menoresTarget = [1, 2, 4, 8, 16]; valor= 22
    // 22 - 16 = 6
    // 6 - 8 = 8 es mayor a 6, se salta
    // 6 - 4 = 2
    // 2 - 2 = 0
    // 0 - 1 = 0 es menor a 1, se salta
    // se suman [16, 4, 2]
    menoresTarget.reverse()
    let nuevoValor = valor
    let listaFinal = []
    for (let i = 0; i < menoresTarget.length; i++) {
      if (menoresTarget[i] <= nuevoValor) {
        nuevoValor -= menoresTarget[i]
        listaFinal.push(menoresTarget[i])
      }
    }

    const valorFinal = Number(listaFinal.reduce((a, b) => a + b, 0))
    if (valorFinal === valor) {
      listaFinal.map(item => this.marcarTarea(item))
    }
  }

  marcarTarea(tarea) {
    const nuevoEstado = this.state.tareas
    const objIndex = nuevoEstado.findIndex(obj => obj.valor === Number(tarea))
    nuevoEstado[objIndex].activo = !this.state.tareas[objIndex].activo
    this.setState({ tareas: nuevoEstado })
  }

  calcularLista(e) {
    this.limpiarLista()
    const valorIngresado = Number(e.target.value)
    this.setState({ valorActual: Number(valorIngresado) }, () => {
      let listaValores = this.state.tareas.map(function(elem) {
        return elem.valor
      })
      const menoresTarget = listaValores.filter(
        val => val <= this.state.valorActual
      )
      if (menoresTarget.includes(this.state.valorActual)) {
        this.marcarTarea(this.state.valorActual)
      } else {
        this.calcularTareasValor(menoresTarget, valorIngresado)
      }
    })
  }

  seleccionarTarea(e) {
    this.marcarTarea(e.target.getAttribute("data-valor"))
    const valor = this.state.tareas
      .filter(tarea => tarea.activo)
      .reduce(function(accumulator, seleccionado) {
        return accumulator + seleccionado.valor
      }, 0)
    this.setState({ valorActual: valor })
  }

  render() {
    return (
      <>
        <StyledInput
          type="number"
          value={this.state.valorActual}
          onChange={e => {
            this.calcularLista(e)
          }}
        />
        <List
          tareas={this.state.tareas}
          seleccionarTarea={this.seleccionarTarea}
        />
      </>
    )
  }
}
export default Calculador
