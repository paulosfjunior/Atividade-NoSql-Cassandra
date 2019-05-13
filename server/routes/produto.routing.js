const express = require('express');

const produtoService = require('../services/produto.service');

// carrengado express router
const rotas = express.Router();

// carregar rotas
rotas.get('/', getAll);
rotas.get('/:id', getById);
rotas.post('/', passport.authenticate('adminJwt', { session: false }), createRegister);
rotas.put('/:id', passport.authenticate('adminJwt', { session: false }), updateRegister);
rotas.delete('/:id', passport.authenticate('adminJwt', { session: false }), deleteRegister);

module.exports = rotas;

function getAll(req, res) {
  produtoService.listar()
      .then((resultado) => {
        res.json({
          tipo: 'sucesso',
          resultado,
          mensagem: 'Lista carregada.'
        });
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Não foi possivel carregar lista de produtos.'});
      });
}

function getById(req, res) {
  produtoService.procurar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.json({
            tipo: 'sucesso',
            resultado,
            mensagem: 'Produto encontrado.'});
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Produto não encontrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Produto não encontrado.'});
      });
}

function createRegister(req, res) {
  produtoService.criar(req.body)
      .then((resultado) => {
        if (resultado) {
          produtoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              mensagem: 'Produto ' + req.body.nome + ' foi cadastrado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Produto não cadastrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Produto não cadastrado.'});
      });
}

function updateRegister(req, res) {
  produtoService.editar(req.params.id, req.body)
      .then((resultado) => {
        if (resultado) {
          produtoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              mensagem: 'Produto ' + req.body.nome + ' foi alterado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Produto não foi alterado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Produto não foi alterado.'});
      });
}

function deleteRegister(req, res) {
  produtoService.deletar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          produtoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              mensagem: 'Produto ' + req.params.id + ' foi apagado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Produto não foi apagado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Produto não foi apagado.'});
      });
}
