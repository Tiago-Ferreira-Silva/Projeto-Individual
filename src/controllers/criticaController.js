var criticaModel = require("../models/criticaModel");



function listar(req, res) {
    criticaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastraAvaliacao(req, res) {

    var nome_Filme = req.body.nomeFilmeServer;
    var idUsuario = req.body.idUsuarioServer;
    var avaliacaoUsuario = req.body.avaliacaoUsuarioServer;
  
    

    // Faça as validações dos valores
    if (nome_Filme == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("o id está undefined!");
    } else if (avaliacaoUsuario == undefined) {
        res.status(400).send("Seu avaliacaoUsuario está undefined!");
    } 
    else{


    criticaModel.cadastraAvaliacao(nome_Filme,idUsuario,avaliacaoUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}
function media(req, res) {

    var nome_Filme = req.body.nomeFilmeServer;
    


    // Faça as validações dos valores
    if (nome_Filme == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else{


    criticaModel.media(nome_Filme)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

module.exports = {
    
    listar,
    cadastraAvaliacao,
    media

}