const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsHandler = require("../handlers/dogsHandler");
const dogByIdHandler = require("../handlers/dogsByIdHandler");
const dogPostHandler = require("../handlers/dogPostHandler");
const temperamentsHandler = require("../handlers/temperamentsHandler");
// const deleteHandler = require('../handlers/deleteDog');


const router = Router();


router.get("/dogs", dogsHandler);

router.get("/dogs/:id", dogByIdHandler);

router.post("/dogs", dogPostHandler);

router.get("/temperaments", temperamentsHandler);

// router.delete("/dogs", deleteHandler);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
