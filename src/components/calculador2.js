import React, { useState } from 'react';
import styled from 'styled-components';
import ListaTareas from './listaTareas';
import Input from './input';

const StyledTitle = styled.h2`
  margin: auto 0;
  margin-right: 20px;
`;

function Calculador2({ tareas, title }) {
  const [listaTareas, setListaTareas] = useState(tareas);
  const [valorActual, setValorActual] = useState(0);

  const MarcarTarea = (valorTarea) => {
    // very importat, not just copy the array, instead avoid mutation
    const nuevaListaTareas = [...listaTareas];
    const tareaSeleccionada = nuevaListaTareas.findIndex(
      (obj) => obj.valor === valorTarea,
    );
    nuevaListaTareas[tareaSeleccionada].activo = !listaTareas[tareaSeleccionada]
      .activo;
    setListaTareas(nuevaListaTareas);
  };

  const CalculatValorXTareas = () => {
    const valorXTareas = listaTareas
      .filter((tarea) => tarea.activo)
      .reduce(
        (accumulator, seleccionado) => accumulator + seleccionado.valor,
        0,
      );
    setValorActual(valorXTareas);
  };

  const CalcularTareasXValor = (valorIngresado) => {
    const listaLimpia = [...listaTareas].reverse();
    let nuevoValor = valorIngresado;
    let valorFinal = 0;
    for (let i = 0; i < listaLimpia.length; i += 1) {
      listaLimpia[i].activo = false;
      if (listaLimpia[i].valor <= valorIngresado) {
        if (listaLimpia[i].valor <= nuevoValor) {
          nuevoValor -= listaLimpia[i].valor;
          listaLimpia[i].activo = true;
          valorFinal += listaLimpia[i].valor;
        }
      }
    }
    if (valorFinal !== valorIngresado) {
      for (let i = 0; i < listaLimpia.length; i += 1) {
        listaLimpia[i].activo = false;
      }
    }
    setValorActual(valorIngresado);
    setListaTareas(listaLimpia.reverse());
  };

  const TareaSeleccionada = (dato) => {
    MarcarTarea(dato);
    CalculatValorXTareas();
  };

  const CambiarValor = (e) => {
    const valorIngresado = Number(e.target.value);
    CalcularTareasXValor(valorIngresado);
  };

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Input
        valor={valorActual}
        cambiar={CambiarValor}
      />
      <ListaTareas
        listaTareas={listaTareas}
        tareaSeleccionada={TareaSeleccionada}
      />
    </>
  );
}

export default Calculador2;
