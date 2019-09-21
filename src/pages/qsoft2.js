import React from 'react';
import Layout from '../components/layout';
import Calculador2 from '../components/calculador2';
import Tareas from '../sistemas/qsoft2';

const title = 'QSOFT2';
const Qsoft2 = () => (
  <Layout title={title}>
    <Calculador2 tareas={Tareas} title={title} />
  </Layout>
);

export default Qsoft2;
