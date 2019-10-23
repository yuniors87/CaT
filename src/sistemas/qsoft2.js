const TareasBase = [
  { nombre: 'EnviarRecordatorioRevisionIncidentes', valor: 1 },
  { nombre: 'EnviarRecordatorioAnalisisIncidentes', valor: 2 },
  { nombre: 'EnviarRecordatorioAprobacionIncidentes', valor: 4 },
  { nombre: 'EnviarResumenIncidentesNoCerrados', valor: 8 },
  { nombre: 'EnviarRecordatorioRevisionMejoras', valor: 16 },
  { nombre: 'EnviarRecordatorioAprobacionMejoras', valor: 32 },
  { nombre: 'EnviarRecordatorioPlanAccionMejorasContinuas', valor: 64 },
  { nombre: 'EnviarResumenMejorasNoCerradas', valor: 128 },
  { nombre: 'EnviarRecordatorioSeguimientoAcciones', valor: 256 },
  { nombre: 'EnviarRecordatorioAccionesFechaFinalizacionProxima', valor: 512 },
  { nombre: 'EnviarRecordatorioSeguimientoResponsableAcciones', valor: 1024 },
  { nombre: 'EnviarRecordatorioMedicionEficacia', valor: 2048 },
  { nombre: 'IniciarReemplazo', valor: 4096 },
  { nombre: 'FinalizarReemplazo', valor: 8192 },
  { nombre: 'EnviarInformesActividadesPendientes', valor: 16384 },
  { nombre: 'EnviarRecordatorioCierreAccionPendiente', valor: 32768 },
  { nombre: 'EnviarRecordatorioSeguimientoPlanes', valor: 65536 },
  { nombre: 'ActualizarLicencia', valor: 131072 },
  { nombre: 'EnviarResumenDesviacionesNoCerradas', valor: 262144 },
  { nombre: 'PruebaEnvioCorreo', valor: 1048576 },
];

export default TareasBase;
