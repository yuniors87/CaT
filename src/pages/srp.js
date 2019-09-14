import React from "react"
import Layout from "../components/layout"
import Calculador from "../components/calculador"
import Tareas from "../sistemas/srp"

const Srp = () => (
  <Layout>
    <Calculador tareas={Tareas} />
  </Layout>
)

export default Srp
