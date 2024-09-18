import { Solicitudes } from "../modelos/solicitudModelo.js";


const crearSolicitud = async (req, res) => {
    try {
        const nuevaSolicitud = await Solicitudes.create(req.body);
        res.status(200).json(nuevaSolicitud);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear solicitud', error });
    }
};

const buscarSolicitudes = async (req, res) => {
    try {
        const solicitudes = await Solicitudes.findAll();
        res.status(200).json(solicitudes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener solicitudes', error });
    }
};

const buscarSolicitudId = async (req, res) => {
    try {
        const solicitud = await Solicitudes.findByPk(req.params.id);
        if (solicitud) {
            res.status(200).json(solicitud);
        } else {
            res.status(400).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar solicitud', error });
    }
};

const actualizarSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitudes.findByPk(req.params.id);
        if (solicitud) {
            await solicitud.update(req.body);
            res.status(200).json(solicitud);
        } else {
            res.status(400).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar solicitud', error });
    }
};

const eliminarSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitudes.findByPk(req.params.id);
        if (solicitud) {
            await solicitud.destroy();
            res.status(200).json({ message: 'Solicitud eliminada' });
        } else {
            res.status(400).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar solicitud', error });
    }
};

export { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud };
