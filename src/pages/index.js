import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import List from "../components/list"

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
      valorTotal: 0,
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
    const tamanoLista = menoresTarget.length
    console.log(`tamaño ${tamanoLista} de ${menoresTarget}`)

    for (let pos = 0; pos < tamanoLista + 1; pos++) {
      for (let can = 1; can < tamanoLista + 1; can++) {
        let listAux = [...menoresTarget]
        listAux.splice(pos, can)
        // console.log(removed)
        // console.log(listAux)
        if (listAux.length > 1) {
          const res = Number(listAux.reduce((ac, val) => ac + val))
          if (res === valor) {
            console.log(`pos:${pos} - can:${can}`)
            console.log("llego")
            console.log(listAux)
          }
        }
        // if (listAux.reduce((ac, val) => ac + val) == valor) {
        //   console.log("llego")
        // }
      }
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
    const valor = Number(e.target.value)
    this.setState({ valorTotal: Number(valor) }, () => {
      let listaValores = this.state.tareas.map(function(elem) {
        return elem.valor
      })
      const menoresTarget = listaValores.filter(
        val => val <= this.state.valorTotal
      )
      if (menoresTarget.includes(this.state.valorTotal)) {
        this.marcarTarea([this.state.valorTotal])
      } else {
        this.calcularTareasValor(menoresTarget, valor)
      }
    })
  }

  calcularValor() {
    const seleccionados = this.state.tareas.filter(tarea => tarea.activo)
    const valor = seleccionados.reduce(function(accumulator, seleccionado) {
      return accumulator + seleccionado.valor
    }, 0)
    this.setState({ valorTotal: valor })
  }

  seleccionarTarea(e) {
    this.marcarTarea([e.target.getAttribute("data-valor")])
    this.calcularValor()
  }
  render() {
    return (
      <Layout>
        <h1>Pruebas</h1>
        <input
          type="number"
          name="title"
          value={this.state.valorTotal > 0 ? this.state.valorTotal : ""}
          onChange={e => {
            this.calcularLista(e)
          }}
        />
        <List
          tareas={this.state.tareas}
          seleccionarTarea={this.seleccionarTarea}
        />
        <br />
        <Link to="/page-2">Pagina 2</Link>
      </Layout>
    )
  }
}
export default IndexPage
