const db = require("../db");

exports.get = (_, res) => {
  const query = "SELECT * FROM usuarios";

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
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

  db.query(query, [values], (err) => {
    if (err) return res.json(err);

    return res.status(201).json("Usuário criado com sucesso!");
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
