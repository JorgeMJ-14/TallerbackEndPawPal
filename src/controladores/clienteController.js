import { Clientes } from "../modelos/clienteModelo.js";

const crearCliente = async (req, res) => {
    try {
        const nuevoCliente = await Clientes.create(req.body);
        res.status(200).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cliente', error });
    }
};

const buscarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener clientes', error });
    }
};

const buscarClienteId = async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(400).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar cliente', error });
    }
};

const actualizarCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            await cliente.update(req.body);
            res.status(200).json(cliente);
        } else {
            res.status(400).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cliente', error });
    }
};

const eliminarCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            await cliente.destroy();
            res.status(200).json({ message: 'Cliente eliminado' });
        } else {
            res.status(400).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cliente', error });
    }
};

export { crearCliente, buscarClientes, buscarClienteId, actualizarCliente, eliminarCliente };
