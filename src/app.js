import express from 'express';
import { db } from './database/conexion.js'; // Asegúrate de ajustar la ruta
import { routerMascotas } from './rutas/mascotasRouter.js';

const app = express();
const PORT = 4000;

// Middleware JSON
app.use(express.json());

// Verificar Conexión Base de Datos
db.authenticate().then(() => {
    console.log('Conexión a Base de datos correcta');
}).catch(err => {
    console.error(`Conexión a Base de datos incorrecta: ${err}`);
});

// Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Adopta un Perrito');
});

//Llamar rutas de mascotas
app.use("/mascotas",routerMascotas);

// Sincronizar Modelos
db.sync({ force: true }).then(() => {
    console.log('Tablas sincronizadas');

    // Iniciar el Servidor
    app.listen(PORT, () => {
        console.log(`Servidor inicializado en el puerto ${PORT}`);
    });
}).catch(err => {
    console.error(`Error al sincronizar la base de datos: ${err}`);
});
