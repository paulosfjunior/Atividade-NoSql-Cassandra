const express = require('express');
const router = express.Router({ mergeParams: true });

const sessao = require('./sessao');
const admin = require('./admin');
const usuario = require('./usuario');

router.use('/sessao', sessao);
router.use('/admin', sessao);
router.use('/usuario', sessao);

module.exports = router;