import express from "express"
//Crear instancia de Express
const app = express();



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

