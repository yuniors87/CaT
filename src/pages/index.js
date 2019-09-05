import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import List from "../components/list"

const tareasBase = [
  { nombre: "PublicarDocumentos", valor: 1 },
  { nombre: "IniciarReemplazo", valor: 2 },
  { nombre: "FinalizarReemplazos", valor: 4 },
  { nombre: "EnviarRecordatorioRevision", valor: 8 },
  { nombre: "EnviarRecordatorioAprobacion", valor: 16 },
  { nombre: "EnviarResumenPublicacion", valor: 128 },
  { nombre: "CambioExtensionDocumentosFormato", valor: 256 },
  { nombre: "RegenerarDocumentosPublicadoslectura", valor: 512 },
  { nombre: "EnviarRecordatorioElaboracion", valor: 1024 },
  { nombre: "ConfiguracionDocVariablesWord", valor: 2048 },
  { nombre: "ProtegerLecturaWords", valor: 4096 },
  { nombre: "ReinsertarEncabezados", valor: 8192 },
  { nombre: "EnviarRecordatorioRevisionSinCambios", valor: 16384 },
  { nombre: "ModificarDocumentosVigentesOEnProceso", valor: 32768 },
  { nombre: "CambiarCodigoSector", valor: 65536 },
  { nombre: "ActualizarLicencia", valor: 131072 },
  { nombre: "PruebaEnvioCorreo", valor: 1048576 },
]

function IndexPage() {
  const [items, setItems] = useState(
    tareasBase.map(tarea => ({
      nombre: tarea.nombre,
      valor: tarea.valor,
      activo: false,
    }))
  )
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log("clicl desde index")
  }

  const cambiar = e => {
    // console.log(e.target.getAttribute("data-valor"))
    const val = e.target.getAttribute("data-valor")
    const nuevoEstado = items
    const objIndex = nuevoEstado.findIndex(obj => obj.valor == val)
    console.log(items[objIndex])
    nuevoEstado[objIndex].activo = !nuevoEstado[objIndex].activo
    setItems(nuevoEstado)
    console.log(objIndex)
    console.log(items[objIndex])

  }

  return (
    <Layout>
      <h1>Pruebas</h1>
      <List tareas={items} onClick={handleSubmit} cambiar={cambiar} />
      <br />
      <Link to="/page-2">Pagina 2</Link>
    </Layout>
  )
}
export default IndexPage
