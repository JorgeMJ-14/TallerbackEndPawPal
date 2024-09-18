import { Mascotas } from "../modelos/mascotaModelo.js";

// Crear una nueva mascota
export const crearM = async (req, res) => {
    try {
        const mascota = await Mascotas.create(req.body);
        res.status(201).json(mascota);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la mascota' });
    }
};

// Buscar todas las mascotas
export const buscarM = async (req, res) => {
    try {
        const mascotas = await Mascotas.findAll();
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
};

// Buscar una mascota por ID
export const buscarIdM = async (req, res) => {
    try {
        const mascota = await Mascotas.findByPk(req.params.id);
        if (mascota) {
            res.json(mascota);
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la mascota' });
    }
};

// Actualizar una mascota por ID
export const actualizarM = async (req, res) => {
    try {
        const [updated] = await Mascotas.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const mascota = await Mascotas.findByPk(req.params.id);
            res.json(mascota);
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la mascota' });
    }
};

// Eliminar una mascota por ID
export const eliminarM = async (req, res) => {
    try {
        const deleted = await Mascotas.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Mascota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
};
