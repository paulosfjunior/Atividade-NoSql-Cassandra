const express = require('express');

const usuarioServico = require('../services/usuario.service');

// carrengado express router
const rotas = express.Router();

// carregar rotas
rotas.get('/', getAll);
rotas.get('/p/:id', getById);
rotas.post('/r', createRegister);

module.exports = rotas;

function getAll(req, res) {
  console.log('getAll')
  usuarioServico.listar()
      .then((resultado) => {
        res.json({
          tipo: 'sucesso',
          mensagem: resultado});
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: erro});
      });
}

function getById(req, res) {
  usuarioServico.procurar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.send(resultado);
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Registro não encontrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: erro});
      });
}

function createRegister(req, res) {
  usuarioServico.criar(req.body)
      .then((resultado) => {
        if (resultado) {
          res.send(resultado);
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Usuário não cadastrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: erro});
      });
}
