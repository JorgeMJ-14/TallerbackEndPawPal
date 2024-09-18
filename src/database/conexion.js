import { Sequelize } from "sequelize";

const db = new Sequelize("mascotaadopcion","mascotas","mascotas2024",{
    dialect:"mysql",
    host:"localhost"
});

export{db}

