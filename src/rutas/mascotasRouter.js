import express from 'express';
import { crearM, buscarM, buscarIdM, actualizarM, eliminarM } from '../controladores/mascotasController.js';

const routerMascotas = express.Router();

// Ruta de prueba
routerMascotas.get('/', (req, res) => {
    res.send('Hola Sitio de Mascotas');
});

// Crear una nueva mascota
routerMascotas.post('/crear', (req, res) => {
    crearM(req, res);
});

// Buscar todas las mascotas
routerMascotas.get('/buscar', (req, res) => {
    buscarM(req, res);
});

// Buscar una mascota por ID
routerMascotas.get('/buscarId/:id', (req, res) => {
    buscarIdM(req, res);
});

// Actualizar una mascota por ID
routerMascotas.put('/actualizar/:id', (req, res) => {
    actualizarM(req, res);
});

// Eliminar una mascota por ID
routerMascotas.delete('/eliminar/:id', (req, res) => {
    eliminarM(req, res);
});

export { routerMascotas };
