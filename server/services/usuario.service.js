var Bluebird = require('bluebird');
var uuid = require('uuid/v1');

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
    let query = "CREATE KEYSPACE IF NOT EXISTS atividadenosql WITH replication = " +
                "{'class': 'SimpleStrategy', 'replication_factor': '3' }";
    
    cassandra.execute(query, (e, r) => {
      if (e) reject(e);
      if (r) resolve(r);
    });
  });
}

function tipoExiste() {
  return new Bluebird((resolve, reject) => {
    keyspaceExiste()
      .then((r) => {
        let query = 'CREATE TYPE IF NOT EXISTS atividadenosql.endereco ' + 
                    '(endereco text, bairro text, cidade text, pais text, cep text)';
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  });
}

function tabelaExiste() {
  return new Bluebird((resolve, reject) => {
    tipoExiste()
      .then((r) => {
        let query = 'CREATE TABLE IF NOT EXISTS atividadenosql.usuario ' + 
                    '(id uuid, usuario text, nome text, endereco endereco, email text, hash text, salt text, PRIMARY KEY(id))';
    
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
        let parametro = p;
        parametro.id = uuid();

        let query = 'INSERT INTO atividadenosql.usuario ' +
                    '(id, usuario, nome, endereco, email, hash, salt) VALUES ' +
                    '(:id, :usuario, :nome, :endereco, :email, :hash, :salt)';

        cassandra.execute(query, parametro, {prepare: true}, (e, r) => {
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
        let query = 'SELECT * FROM atividadenosql.usuario';
    
        cassandra.execute(query, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r.rows);
        });
      })
      .catch((e) => reject(e));
  })
}

function editarRegistro(id, p) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        let parametro = p;
        parametro.id = id;

        let query = 'UPDATE atividadenosql.usuario SET ' +
                    'usuario = :usuario, ' + 
                    'nome = :nome, ' + 
                    'endereco = :endereco, ' + 
                    'email = :email, ' + 
                    'hash = :hash, ' + 
                    'salt = :salt ' +
                    'WHERE id = :id';
    
        cassandra.execute(query, parametro, {prepare: true}, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  })
}

function deletarRegistro(id) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        let parametro = {id: id};

        let query = 'DELETE FROM atividadenosql.usuario ' +
                    'WHERE id = :id';

        cassandra.execute(query, parametro, {prepare: true}, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r);
        });
      })
      .catch((e) => reject(e));
  })
}

function procurarRegistro(id) {
  return new Bluebird((resolve, reject) => {
    tabelaExiste()
      .then((r) => {
        let parametro = {id: id};

        let query = 'SELECT * FROM atividadenosql.usuario ' +
                    'WHERE id = :id';
;
        cassandra.execute(query, parametro, {prepare: true}, (e, r) => {
          if (e) reject(e);
          if (r) resolve(r.rows);
        });
      })
      .catch((e) => reject(e));
  })
}
