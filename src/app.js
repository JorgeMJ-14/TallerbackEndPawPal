import express from "express"
import { db } from "./database/conexion.js";
//Crear instancia de Express
const app = express();

//Verificar Conexion Base Datos
db.authenticate().then(()=>{
    console.log(`Conexion a Base de datos correcta`);
}).catch(err=>{
    console.log(`Conexion a Base de datos incorrecta ${err}`);
});


//Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Adopta un Perrito');
});


//Puerto de Servidor
const PORT=4000;


    //Abri servicio e iniciar el Servidor
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })

