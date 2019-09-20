import React from 'react';
import Layout from '../components/layout';
import Calculador2 from '../components/calculador2';
import Tareas from '../sistemas/qsoft';

const title = 'QSOFT';
const Qsoft = () => (
  <Layout title={title}>
    <Calculador2 tareas={Tareas} />
    {/* <Calculador tareas={Tareas} title={title} /> */}
  </Layout>
);

export default Qsoft;
