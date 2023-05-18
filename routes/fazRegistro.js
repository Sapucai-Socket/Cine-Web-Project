var express = require('express');
var router = express.Router();
const {
    getAuth,
    createUserWithEmailAndPassword
} = require('firebase/auth');

router.post('/', function (req, res) {
    const {
        usuario,
        senha
    } = req.body;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario, senha)
    .then((userCredential) => {
        const user = userCredential.user;
        res.send(`Sucesso! Bem-vindo ao Ciné, ${user.email}.<br>Por favor, faça login.`);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
            res.send('E-mail já registrado');
        } else if (errorCode == 'auth/weak-password') {
            res.send('Sua senha deve conter no mínimo 6 caracteres');
        } else {
            res.send(`${errorCode}<br>${errorMessage}`)
        }
    });
});

module.exports = router;
