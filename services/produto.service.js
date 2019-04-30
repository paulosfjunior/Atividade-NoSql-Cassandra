var Bluebird = require('bluebird');

var cassandra = require('../services/db.service');

var servico = {}

servico.criar = criarRegistro
servico.listar = listarRegistro
servico.editar = editarRegistro
servico.deletar = deletarRegistro
servico.procurar = procurarRegistro

module.exports = servico

function keyspaceExiste() {
  return new Bluebird((resolve, reject) => {
    const query = "CREATE KEYSPACE IF NOT EXISTS atividadenosql WITH replication = " +
                  "{'class': 'SimpleStrategy', 'replication_factor': '3' }";
    
    cassandra.execute(query, (e, r) => {
      if (e) reject(e);
      if (r) resolve(r);
    });
  });
}

function tabelaExiste() {
  return new Bluebird((resolve, reject) => {
    keyspaceExiste()
      .then((r) => {
        const query = "CREATE TABLE IF NOT EXISTS atividadenosql.produto " + 
                      "(id timeuuid, nome text, descricao text, preco float, PRIMARY KEY(id))";
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  });
}

function criarRegistro(p) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        const query = "INSERT INTO atividadenosql.produto " +
                      "(id, nome, descricao, preco) VALUES " +
                      "(now(), '" + p.nome + "', '" + p.descricao + "', " + parseFloat(p.preco) + ")";
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  })
}

function listarRegistro() {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        const query = 'SELECT * FROM atividadenosql.produto';
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r.rows);
        });
      })
      .catch((e) => reject(e));
  })
}

function editarRegistro(p) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        const query = "UPDATE atividadenosql.produto SET " +
                      "nome = '" + p.nome + "', " + 
                      "descricao = '" + p.descricao + "', " + 
                      "preco = " + parseFloat(p.preco) + " " + 
                      "WHERE id = " + p.id;
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  })
}

function deletarRegistro(p) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {

        const query = "DELETE FROM atividadenosql.produto " +
                      "WHERE id " +
                      Array.isArray(p.id) ? p.id.length > 1 ? "IN (" + p.id[0] + ", " + p.id[1] + "')" : "= " + p.id[0] : "= " + p.id;
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  })
}

function procurarRegistro(p) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        const query = "SELECT * FROM atividadenosql.produto " +
                      "WHERE id = " + p;
;
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r.rows);
        });
      })
      .catch((e) => reject(e));
  })
}
