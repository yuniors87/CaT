import React from "react"
import Layout from "../components/layout"
import Calculador from "../components/calculador"
import Tareas from "../sistemas/qsoft"

const Qsoft = () => (
  <Layout>
    <Calculador tareas={Tareas} />
  </Layout>
)

export default Qsoft
