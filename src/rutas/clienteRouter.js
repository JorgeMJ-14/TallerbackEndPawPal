import express from 'express';
import { crearCliente, buscarClientes, buscarClienteId, actualizarCliente, eliminarCliente } from '../controladores/clienteController.js';

const routerClientes = express.Router();

routerClientes.post('/crearCliente', (req, res) => {
    crearCliente(req, res);
});

routerClientes.get('/buscarClientes', (req, res) => {
    buscarClientes(req, res);
});

routerClientes.get('/buscarClienteId/:id', (req, res) => {
    buscarClienteId(req, res);
});

routerClientes.put('/actualizarCliente/:id', (req, res) => {
    actualizarCliente(req, res);
});

routerClientes.delete('/eliminarCliente/:id', (req, res) => {
    eliminarCliente(req, res);
});

export { routerClientes };
