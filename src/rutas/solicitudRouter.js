import express from 'express';
import { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud } from '../controladores/solicitudController.js';

const routerSolicitudes = express.Router();

routerSolicitudes.post('/crearSolicitud', (req, res) => {
    crearSolicitud(req, res);
});

routerSolicitudes.get('/buscarSolicitudes', (req, res) => {
    buscarSolicitudes(req, res);
});

routerSolicitudes.get('/buscarSolicitudId/:id', (req, res) => {
    buscarSolicitudId(req, res);
});

routerSolicitudes.put('/actualizarSolicitud/:id', (req, res) => {
    actualizarSolicitud(req, res);
});

routerSolicitudes.delete('/eliminarSolicitud/:id', (req, res) => {
    eliminarSolicitud(req, res);
});

export { routerSolicitudes };
