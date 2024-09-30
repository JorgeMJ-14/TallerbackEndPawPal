import express from 'express';
import { db } from './database/conexion.js'; 
import { routerMascotas } from './rutas/mascotasRouter.js';
import { routerClientes } from './rutas/clienteRouter.js';
import { routerSolicitudes } from './rutas/solicitudRouter.js';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Middleware JSON
app.use(express.json());

app.use(cors());

// Verificar Conexión Base de Datos
db.authenticate().then(() => {
    console.log('Conexión a Base de datos correcta');
}).catch(err => {
    console.error(`Conexión a Base de datos incorrecta: ${err}`);
});

// Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Adopta un Perrito en PawPal');
});

//Llamar rutas de mascotas
app.use("/mascotas",routerMascotas);
app.use("/cliente",routerClientes);
app.use("/solicitud",routerSolicitudes);

// Sincronizar Modelos
db.sync({ force: false}).then(() => {
    console.log('Tablas sincronizadas');

    // Iniciar el Servidor
    app.listen(PORT, () => {
        console.log(`Servidor inicializado en el puerto ${PORT}`);
    });
}).catch(err => {
    console.error(`Error al sincronizar la base de datos: ${err}`);
});
