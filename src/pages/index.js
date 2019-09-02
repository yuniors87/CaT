import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import List from '../components/list'
import ListItem from '../components/list_item'

const tareas = [
  {nombre: 'Tarea.001.Tarea.001.Tarea.001', valor: 1},
  {nombre: 'Tarea.002.Tarea.002', valor: 2},
  {nombre: 'Tarea.003.Tarea.003.Tarea.003', valor: 4},
  {nombre: 'Tarea.004.Tarea.004', valor: 8},
  {nombre: 'Tarea.005.Tarea.005.Tarea.005.Tarea.005', valor: 16},
  {nombre: 'Tarea.006.Tarea.006.Tarea.006', valor: 32},
  {nombre: 'Tarea.007.Tarea.007.Tarea.007', valor: 64},
  {nombre: 'Tarea.008.Tarea.008.Tarea.008', valor: 128},
  {nombre: 'Tarea.009.Tarea.009.Tarea.009', valor: 256},
  {nombre: 'Tarea.010.Tarea.010.Tarea.010', valor: 512},
  {nombre: 'Tarea.011.Tarea.011.Tarea.011', valor: 1024},
];

const IndexPage = () => (
  <Layout>
    <h1>Pruebas</h1>
    <List>
      {tareas.map(tarea => (
        <ListItem key={tarea.valor} nombre={tarea.nombre} valor={tarea.valor} />
        // <li key={tarea.nombre}>{tarea.nombre}</li>
      ))}
    </List>
    <Link to='/page-2'>Pagina 2</Link>
  </Layout>
)

export default IndexPage
