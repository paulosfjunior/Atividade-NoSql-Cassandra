const express = require('express');
const router = express.Router({ mergeParams: true });

const sessao = require('./sessao');
const admin = require('./admin');
const usuario = require('./usuario');
const produtos = require('./produto.routing');
const usuarios = require('./usuario.routing');

router.use('/sessao', sessao);
router.use('/admin', sessao);
router.use('/usuario', sessao);

router.use('/produtos', produtos);
router.use('/usuarios', usuarios);

module.exports = router;