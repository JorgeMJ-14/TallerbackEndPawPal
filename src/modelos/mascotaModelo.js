import { Sequelize } from 'sequelize';
import { db } from '../database/conexion.js';

const Mascotas = db.define('Mascotas', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raza: {
        type: Sequelize.STRING
    },
    edad: {
        type: Sequelize.INTEGER
    },
    sexo: {
        type: Sequelize.ENUM('Macho', 'Hembra'),
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.ENUM('Disponible', 'Adoptado'),
        defaultValue: 'Disponible'
    },
    fecha_ingreso: {
        type: Sequelize.DATE
    },

    foto: { 
        type: Sequelize.STRING,
        allowNull: true 
    }
});

export { Mascotas };
