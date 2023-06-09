var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  var passedVariable = req.query.valid;
  if (passedVariable == 'auth/user-not-found') {
    res.render("login", { aviso: 'Usuário não encontrado.', estilo:'border: 2px solid #f44336;background-color: #ffebee;font-family: Arial, sans-serif;font-size: 14px;padding: 10px;border-radius: 4px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);' });
    // res.send(passedVariable);
  } else if (passedVariable == 'auth/wrong-password') {
    res.render("login", { aviso: 'Senha incorreta.', estilo:'border: 2px solid #f44336;background-color: #ffebee;font-family: Arial, sans-serif;font-size: 14px;padding: 10px;border-radius: 4px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);' });
  } else if (passedVariable == 'unknownError') {
    res.render("login", { aviso: 'Não foi possível realizar o login.', estilo:'border: 2px solid #f44336;background-color: #ffebee;font-family: Arial, sans-serif;font-size: 14px;padding: 10px;border-radius: 4px;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);' });
  } else {
    res.render("login", { aviso: '', estilo:'' });
  }
})

module.exports = router;