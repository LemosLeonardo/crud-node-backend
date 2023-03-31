const db = require("../db");

exports.get = (_, res) => {
  const query = "SELECT * FROM usuarios";

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

exports.getById = (req, res) => {
  const query = "SELECT *, DATE_FORMAT (data_nascimento, '%Y-%m-%d') as data_nascimento FROM usuarios WHERE id = ?";

  db.query(query, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};

exports.post = (req, res) => {
  const query =
    "INSERT INTO usuarios (nome, email, telefone, data_nascimento) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    let id = { id: data.insertId };
    return res.status(201).json(id);
  });
};

exports.put = (req, res) => {
  const query =
    "UPDATE usuarios SET nome = ?, email = ?, telefone =?, data_nascimento = ? WHERE id = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];

  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso!");
  });
};

exports.delete = (req, res) => {
  const query = "DELETE FROM usuarios WHERE id = ?";

  db.query(query, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};
