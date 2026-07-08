const router = require("express").Router();
/*
A expressão acima é a mesma coisa que:
const express = require("express");

const router = express.Router();

*/

const controller = require("../controllers/dataController");
const debug = require("../controllers/debugController");


router.get("/data", controller.generate);

router.get("/debug/error", debug.error);

router.get("/debug/slow", debug.slow);

router.get("/debug/cpu", debug.cpu);

router.get("/debug/memory", debug.memory);

router.get("/debug/memory/clear", debug.clearMemory);


module.exports = router;
