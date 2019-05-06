const express = require('express');

const usuarioServico = require('../services/pedido.service');

// carrengado express router
const rotas = express.Router();

// carregar rotas
rotas.get('/', getAll);
rotas.get('/:id', getById);
rotas.post('/', createRegister);
rotas.put('/:id', updateRegister);
rotas.delete('/:id', deleteRegister);

module.exports = rotas;

function getAll(req, res) {
  usuarioServico.listar()
      .then((resultado) => {
        res.json({
          tipo: 'sucesso',
          mensagem: resultado});
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Não foi possivel carregar lista de pedidos.'});
      });
}

function getById(req, res) {
  usuarioServico.procurar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.json({
            tipo: 'sucesso',
            mensagem: resultado});
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
  usuarioServico.criar(req.body)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Pedido cadastrado.'});
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
  usuarioServico.editar(req.params.id, req.body)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Pedido ' + req.params.id + ' foi alterado.'});
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
  usuarioServico.deletar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Pedido ' + req.params.id + ' foi apagado.'});
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
