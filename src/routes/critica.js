var express = require("express");
var router = express.Router();

var criticaController = require("../controllers/criticaController");




router.get("/listar", function (req, res) {
    criticaController.listar(req, res);
});

router.post("/Avaliacao", function (req, res) {
    criticaController.cadastraAvaliacao(req, res);
});

router.post("/media", function (req, res) {
    criticaController.media(req, res);
});



module.exports = router;