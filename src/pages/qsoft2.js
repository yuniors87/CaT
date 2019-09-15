import React from 'react';
import Layout from '../components/layout';
import Calculador from '../components/calculador';
import Tareas from '../sistemas/qsoft2';

const title = 'QSOFT2';
const Qsoft2 = () => (
  <Layout title={title}>
    <Calculador tareas={Tareas} title={title} />
  </Layout>
);

export default Qsoft2;
