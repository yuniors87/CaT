import React from 'react';
import Layout from '../components/layout';
import Calculador from '../components/calculador';
import Tareas from '../sistemas/qsoft';

const title = 'QSOFT';
const Qsoft = () => (
  <Layout title={title}>
    <Calculador tareas={Tareas} title={title} />
  </Layout>
);

export default Qsoft;
