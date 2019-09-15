import React from 'react';
import Layout from '../components/layout';
import Calculador from '../components/calculador';
import Tareas from '../sistemas/qsoft2';

const Qsoft2 = () => (
  <Layout>
    <Calculador tareas={Tareas} title="QSOFT2" />
  </Layout>
);

export default Qsoft2;
