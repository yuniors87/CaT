import React from 'react';
import Layout from '../components/layout';
import Calculador from '../components/calculador';
import Tareas from '../sistemas/srp';

const title = 'SRP';
const Srp = () => (
  <Layout title={title}>
    <Calculador tareas={Tareas} title={title} />
  </Layout>
);

export default Srp;
