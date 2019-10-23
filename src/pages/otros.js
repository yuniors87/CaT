import React, { useState } from 'react';
import styled from 'styled-components';
import Calculador2 from '../components/calculador2';
import Layout from '../components/layout';
import Button from '../components/button';

const StyledContenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  width: 700px;
  font-size: 14px;
  @media (max-width: 768px) {
    width: 400px;
    font-size: 12px;
  }
`;

const Advertencia = styled.p`
  margin: 5px 0;
  font-size: 14px;
  @media (max-width: 768px) {
    margin: 5px;
    font-size: 12px;
  }
`;

function Otros() {
  const [cadena, setCadena] = useState('');
  const [lista, setLista] = useState([]);

  const HandleChange = (event) => {
    const valor = event.target.value;
    setCadena(valor);
    setLista([]);
  };

  const Calcular = () => {
    const tareas = [];
    let arrayTareas = [];
    if (cadena.length > 0) {
      arrayTareas = cadena.match(/[^\r\n]+/g);
      arrayTareas.map((arr) => {
      // toma la palabra antes del igual " =", no olvidar el espacio
        let nombre = arr.match(/\S+(?= =)/g);
        // toma todos los numeros de la línea
        let valor = arr.match(/\d+/g);
        if (nombre !== null && !isNaN(valor) && valor != null) {
          nombre = nombre.toString();
          valor = valor.toString();
          const obj = { nombre, valor: parseInt(valor, 10) };
          tareas.push(obj);
        }
      });
      setLista(tareas);
    }
  };

  const Calculador = () => {
    if (lista.length > 0) {
      return (<Calculador2 tareasGeneral={lista} />);
    }
    return (<p>Por favor ingrese las tareas</p>);
  };

  return (
    <Layout title="Otros">
      <StyledContenedor>
        <Advertencia>* Se lee cada línea, por cada línea se toma la palabra antes del igual y el monto despues del igual como valor.</Advertencia>
        <StyledTextarea name="tareas" id="tareas" cols="auto" rows="20" onChange={(e) => HandleChange(e)} />
        <Button name="Calcular" click={Calcular} />
        <Calculador />
      </StyledContenedor>
    </Layout>
  );
}

export default Otros;
