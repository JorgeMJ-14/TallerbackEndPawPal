import { Sequelize } from 'sequelize';
import { db } from '../database/conexion.js';
import { Clientes } from "../modelos/clienteModelo.js";
import { Mascotas } from "../modelos/mascotaModelo.js";

const Solicitudes = db.define('Solicitudes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_solicitud: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    estado: {
        type: Sequelize.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
        allowNull: false,
        defaultValue: 'Pendiente'
    }
});

// Definir las relaciones entre Solicitudes, Clientes y Mascotas
Solicitudes.belongsTo(Clientes, { foreignKey: 'clienteId' });
Solicitudes.belongsTo(Mascotas, { foreignKey: 'mascotaId' });

export { Solicitudes };
