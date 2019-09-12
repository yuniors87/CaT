import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import List from "../components/list"

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

const tareasBase = [
  { nombre: "EnviarRecordatorioRevisionIncidentes", valor: 1 },
  { nombre: "EnviarRecordatorioAnalisisIncidentes", valor: 2 },
  { nombre: "EnviarRecordatorioAprobacionIncidentes", valor: 4 },
  { nombre: "EnviarResumenIncidentesNoCerrados", valor: 8 },
  { nombre: "EnviarRecordatorioRevisionMejoras", valor: 16 },
  { nombre: "EnviarRecordatorioAprobacionMejoras", valor: 32 },
  { nombre: "EnviarRecordatorioPlanAccionMejorasContinuas", valor: 64 },
  { nombre: "EnviarResumenMejorasNoCerradas", valor: 128 },
  { nombre: "EnviarRecordatorioSeguimientoAcciones", valor: 256 },
  { nombre: "EnviarRecordatorioAccionesFechaFinalizacionProxima", valor: 512 },
  { nombre: "EnviarRecordatorioSeguimientoResponsableAcciones", valor: 1024 },
  { nombre: "EnviarRecordatorioMedicionEficacia", valor: 2048 },
  { nombre: "IniciarReemplazo", valor: 4096 },
  { nombre: "FinalizarReemplazo", valor: 8192 },
  { nombre: "EnviarInformesActividadesPendientes", valor: 16384 },
  { nombre: "EnviarRecordatorioCierreAccionPendiente", valor: 32768 },
  { nombre: "EnviarRecordatorioSeguimientoPlanes", valor: 65536 },
  { nombre: "ActualizarLicencia", valor: 131072 },
  { nombre: "EnviarResumenDesviacionesNoCerradas", valor: 262144 },
  { nombre: "PruebaEnvioCorreo", valor: 1048576 },
]

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tareas: tareasBase,
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
    console.log(valorFinal, valor)
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
      <Layout>
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
        <Link to="/page-2">Pagina 2</Link>
      </Layout>
    )
  }
}
export default IndexPage
