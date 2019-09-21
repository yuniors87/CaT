import React from 'react';
import Layout from '../components/layout';
import Calculador2 from '../components/calculador2';
import Tareas from '../sistemas/srp';

const title = 'SRP';
const Srp = () => (
  <Layout title={title}>
    <Calculador2 tareas={Tareas} title={title} />
  </Layout>
);

export default Srp;
