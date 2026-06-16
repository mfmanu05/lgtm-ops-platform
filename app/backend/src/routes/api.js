const router = require("express").Router();

const controller = require("../controllers/dataController");


router.get(
    "/generate",
    controller.generate
);


module.exports = router;
