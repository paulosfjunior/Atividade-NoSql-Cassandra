const express = require('express');

const pedidoService = require('../services/pedido.service');

// carrengado express router
const rotas = express.Router();

// carregar rotas
rotas.get('/', getAll);
rotas.get('/:id', getById);
rotas.post('/', createRegister);
rotas.put('/:id', updateRegister);
rotas.delete('/:id', deleteRegister);
rotas.get('/meus', getOwn);

module.exports = rotas;

function getAll(req, res) {
  pedidoService.listar()
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
          mensagem: 'Não foi possivel carregar lista de pedidos.'});
      });
}

function getById(req, res) {
  pedidoService.procurar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.json({
            tipo: 'sucesso',
            resultado,
            mensagem: 'Pedido encontrado.'});
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Pedido não encontrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Pedido não encontrado.'});
      });
}

function createRegister(req, res) {
  pedidoService.criar(req.body)
      .then((resultado) => {
        if (resultado) {
          pedidoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              mensagem: 'Pedido cadastrado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Pedido não cadastrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Pedido não cadastrado.'});
      });
}

function updateRegister(req, res) {
  pedidoService.editar(req.params.id, req.body)
      .then((resultado) => {
        if (resultado) {
          pedidoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              resultado: novaLista,
              mensagem: 'Pedido ' + req.params.id + ' foi alterado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Pedido ' + req.params.id + ' não foi alterado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Pedido ' + req.params.id + ' não foi alterado.'});
      });
}

function deleteRegister(req, res) {
  pedidoService.deletar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          pedidoService.listar()
          .then(novaLista => {
            res.status(200).json({
              tipo: 'sucesso',
              resultado: novaLista,
              mensagem: 'Pedido ' + req.params.id + ' foi apagado.'});
          })
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Pedido ' + req.params.id + ' não foi apagado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Pedido ' + req.params.id + ' não foi apagado.'});
      });
}

function getOwn(req, res) {
  pedidoService.listarMeus(req.user.id)
  .then(resultado => {
      if (resultado) {
        res.status(200).json({
          tipo: 'sucesso',
          resultado,
          mensagem: 'Pedidos buscados.'});
      } else {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Pedido não encontrados.'});
      }
    })
    .catch((erro) => {
      res.status(400).json({
        tipo: 'erro',
        mensagem: 'Pedido não encontrados.'});
  });
}