import React, { Component } from "react"
import styled from "styled-components"

import List from "./list"
// import Qsoft from "../sistemas/qsoft"

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  display: inline-block;
  border: 2px solid darkgray;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
`

class Calculador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tareas: props.tareas,
      valorActual: 0,
      valorMaximo: 0,
    }
    this.seleccionarTarea = this.seleccionarTarea.bind(this)
  }

  limpiarLista() {
    const nuevaLista = this.state.tareas.map(tarea => {
      return { ...tarea, activo: false }
    })
    this.setState({ tareas: nuevaLista })
  }

  calcularTareasValor(menoresTarget, valor) {
    menoresTarget.reverse()
    let nuevoValor = valor
    let listaFinal = []
    menoresTarget.map(aux => {
      if (aux <= nuevoValor) {
        nuevoValor -= aux
        listaFinal.push(aux)
      }
    })
    const valorFinal = listaFinal.reduce((a, b) => a + b, 0)
    if (valorFinal == valor) {
      listaFinal.map(item => this.marcarTarea(item))
    }
  }

  marcarTarea(tarea) {
    const nuevoEstado = this.state.tareas
    const objIndex = nuevoEstado.findIndex(obj => obj.valor === Number(tarea))
    nuevoEstado[objIndex].activo = !nuevoEstado[objIndex].activo
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

  calcularValor() {
    const seleccionados = this.state.tareas.filter(tarea => tarea.activo)
    const valor = seleccionados.reduce(function(accumulator, seleccionado) {
      return accumulator + seleccionado.valor
    }, 0)
    this.setState({ valorActual: valor })
  }

  seleccionarTarea(e) {
    this.marcarTarea(e.target.getAttribute("data-valor"))
    this.calcularValor()
  }
  render() {
    return (
      < >
        <StyledInput
          type="number"
          name="title"
          value={this.state.valorActual > 0 ? this.state.valorActual : ""}
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
