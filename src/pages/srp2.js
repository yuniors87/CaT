import React from 'react';
import Layout from '../components/layout';
import Tareas from '../sistemas/srp2';
import ListaTareas2 from '../components/listaTareas2';

const title = 'SRP v2';

const SRP2 = () => (
  <Layout title={title}>
    <>
      <ListaTareas2 listaTareas={Tareas} />
    </>
  </Layout>
);

export default SRP2;
