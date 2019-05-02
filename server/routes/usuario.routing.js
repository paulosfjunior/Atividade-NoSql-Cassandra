const express = require('express');

const usuarioServico = require('../services/usuario.service');

// carrengado express router
const rotas = express.Router();

// carregar rotas
rotas.get('/', getAll);
rotas.get('/:id', getById);
rotas.post('/', createRegister);
rotas.put('/:id', updateRegister);
rotas.delete('/:id', deleteRegister);
rotas.post('/autenticar', authUser);

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
          mensagem: 'Não foi possivel carregar lista de usuários.'});
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
            mensagem: 'Usuário não encontrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Usuário não encontrado.'});
      });
}

function createRegister(req, res) {
  usuarioServico.criar(req.body)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Usuário ' + req.body.usuario + ' foi cadastrado.'});
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Usuário não cadastrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Usuário não cadastrado.'});
      });
}

function updateRegister(req, res) {
  usuarioServico.editar(req.params.id, req.body)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Usuário ' + req.body.usuario + ' foi alterado.'});
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Usuário não foi alterado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Usuário não foi alterado.'});
      });
}

function deleteRegister(req, res) {
  usuarioServico.deletar(req.params.id)
      .then((resultado) => {
        if (resultado) {
          res.status(200).json({
            tipo: 'sucesso',
            mensagem: 'Usuário ' + req.params.id + ' foi apagado.'});
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Usuário não foi apagado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Usuário não foi apagado.'});
      });
}

function authUser(req, res) {
  usuarioServico.autenticar(req.body.usuario)
      .then((resultado) => {
        if (resultado) {
          // modificar para validar corretamente com hash e salt
          if (resultado.hash == req.body.senha) {
            res.json({
              tipo: 'sucesso',
              mensagem: true});
          } else {
            res.json({
              tipo: 'sucesso',
              mensagem: false});
          }
        } else {
          res.status(400).json({
            tipo: 'erro',
            mensagem: 'Usuário não encontrado.'});
        }
      })
      .catch((erro) => {
        res.status(400).json({
          tipo: 'erro',
          mensagem: 'Usuário não encontrado.'});
      });
}
