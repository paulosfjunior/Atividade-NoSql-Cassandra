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

function tipoExiste() {
  return new Bluebird((resolve, reject) => {
    keyspaceExiste()
      .then((r) => {
        const query = "CREATE TYPE IF NOT EXISTS atividadenosql.endereco " + 
                      "(endereco text, bairro text, cidade text, pais text, cep text)";
    
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
        const query = "CREATE TABLE IF NOT EXISTS atividadenosql.usuario " + 
                      "(id timeuuid, usuario text, nome text, endereco frozen<endereco>, email text, hash text, salt text, PRIMARY KEY(id))";
    
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
        let endereco = {
          endereco: p.endereco,
          bairro: p.bairro,
          cidade: p.cidade,
          pais: p.pais,
          cep: p.cep
        }

        console.log({p,endereco})
        const query = "INSERT INTO atividadenosql.usuario " +
                      "(id, usuario, nome, endereco, email, hash, salt) VALUES " +
                      "(now(), '" + p.usuario + "', '" + p.nome + "', " + endereco + ", '" + p.email + "', '" + p.hash + "', '" + p.salt + "')";
        console.log({query})
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
        const query = "SELECT * FROM atividadenosql.usuario";
    
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
        const query = "UPDATE atividadenosql.usuario SET " +
                      "usuario = '" + p.usuario + "', " + 
                      "nome = '" + p.nome + "', " + 
                      "endereco = '" + p.endereco + "', " + 
                      "email = '" + p.email + "', " + 
                      "hash = '" + p.hash + "', " + 
                      "salt = '" + p.salt + "' " +
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

        const query = "DELETE FROM atividadenosql.usuario " +
                      "WHERE id " +
                      Array.isArray(p.id) ? p.id.length > 1 ? "IN (" + p.id[0] + ", " + p.id[1] + ")" : "= " + p.id[0] : "= " + p.id;
    
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
        const query = "SELECT * FROM atividadenosql.usuario " +
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
