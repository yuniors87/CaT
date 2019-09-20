import React, { useState, useEffect } from 'react';
import ListaTareas from './listaTareas';
import Input from './input';

function Calculador2({ tareas }) {
  const [listaTareas, setListaTareas] = useState(tareas);
  const [valorActual, setValorActual] = useState(0);

  const MarcarTarea = (valorTareaSeleccionada) => {
    // very importat, not just copy the array, instead avoid mutation
    const nuevaListaTareas = [...listaTareas];
    const tareaSeleccionada = nuevaListaTareas.findIndex(
      (obj) => obj.valor === valorTareaSeleccionada,
    );
    nuevaListaTareas[tareaSeleccionada].activo = !listaTareas[tareaSeleccionada]
      .activo;
    setListaTareas(nuevaListaTareas);
  };

  const CalcularTareasValor = (menoresTarget) => {
    // recive las tareas menores al valor seleccionado,
    // resta al valor recibido el maximo de las tareas menores
    // vuelve a restar el mayor al resto, siempre
    // y cuando la siguiente tarea sea menor o igal al resto
    // menoresTarget = [1, 2, 4, 8, 16]; valor= 22
    // 22 - 16 = 6
    // 6 - 8 = 8 es mayor a 6, se salta
    // 6 - 4 = 2
    // 2 - 2 = 0
    // 0 - 1 = 0 es menor a 1, se salta
    // se suman [16, 4, 2]
    menoresTarget.reverse();
    let nuevoValor = valorActual;
    const listaFinal = [];
    for (let i = 0; i < menoresTarget.length; i += 1) {
      if (menoresTarget[i] <= nuevoValor) {
        nuevoValor -= menoresTarget[i];
        listaFinal.push(menoresTarget[i]);
      }
    }

    const valorFinal = Number(listaFinal.reduce((a, b) => a + b, 0));
    if (valorFinal === valorActual) {
      listaFinal.map((item) => MarcarTarea(item));
    }
  };

  const TareaSeleccionada = (dato) => {
    MarcarTarea(dato);
    const tareasActivas = listaTareas
      .filter((tarea) => tarea.activo)
      .reduce(
        (accumulator, seleccionado) => accumulator + seleccionado.valor,
        0,
      );
    // setValorActual(tareasActivas);
    // console.log(tareasActivas);
  };

  const LimpiarTareas = () => {
    const nuevaListaTareas = listaTareas.map((tarea) => ({ ...tarea, activo: false }));
    setListaTareas(nuevaListaTareas);
  };

  const CalcularTareasDesdeValor = () => {
    const listaValoresGeneral = listaTareas.map((elem) => elem.valor);
    const tareasMenores = listaValoresGeneral.filter((val) => val <= valorActual);
    if (tareasMenores.includes(valorActual)) {
      MarcarTarea(valorActual);
    } else {
      CalcularTareasValor(tareasMenores);
    }
  };

  useEffect(() => {
    CalcularTareasDesdeValor();
  }, [valorActual]);

  const CambiarValor = (e) => {
    LimpiarTareas();
    const valorIngresado = Number(e.target.value);
    setValorActual(valorIngresado);
  };

  return (
    <div>
      <Input
        valor={valorActual}
        cambiar={CambiarValor}
      />
      <ListaTareas
        listaTareas={listaTareas}
        tareaSeleccionada={TareaSeleccionada}
      />
    </div>
  );
}

export default Calculador2;
