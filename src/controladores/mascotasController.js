import { Mascotas } from "../modelos/mascotaModelo.js";

// Crear una nueva mascota
const crearM = async (req, res) => {
    try {
        const mascota = await Mascotas.create(req.body);
        res.status(200).json(mascota);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la mascota' });
    }
};

// Buscar todas las mascotas
const buscarM = async (req, res) => {
    try {
        const mascotas = await Mascotas.findAll();
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
};

// Buscar una mascota por ID
const buscarIdM = async (req, res) => {
    try {
        const mascota = await Mascotas.findByPk(req.params.id);
        if (mascota) {
            res.json(mascota);
        } else {
            res.status(400).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la mascota' });
    }
};

// Actualizar una mascota por ID
const actualizarM = async (req, res) => {
    try {
        const [updated] = await Mascotas.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const mascota = await Mascotas.findByPk(req.params.id);
            res.json(mascota);
        } else {
            res.status(400).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la mascota' });
    }
};

// Eliminar una mascota por ID
const eliminarM = async (req, res) => {
    try {
        const deleted = await Mascotas.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).send();
        } else {
            res.status(400).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
};

export { crearM, buscarM, buscarIdM, actualizarM, eliminarM };