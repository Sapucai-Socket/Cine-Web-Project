var express = require('express');
var router = express.Router();
const {
    getAuth,
    signInWithEmailAndPassword
} = require('firebase/auth');

router.post('/', function (req, res) {
    const {
        usuario,
        senha
    } = req.body;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, usuario, senha)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // res.send(`Sucesso! Bem-vindo novamente ao Ciné, ${user.email}.`);
		console.log(`Sucesso! Bem-vindo novamente ao Ciné, ${user.email}.`);
		res.redirect('/Auth');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/user-not-found') {

            //res.send('Usuário não encontrado');
            var string = encodeURIComponent('auth/user-not-found');
            res.redirect('login?valid=' + string);
        } else if (errorCode == 'auth/wrong-password') {
            // res.send('Senha incorreta');
            var string = encodeURIComponent('auth/wrong-password');
            res.redirect('login?valid=' + string);
        } else {
            var string = encodeURIComponent('unknownError');
            res.redirect('login?valid=' + string);
            console.log(`${errorCode}\n${errorMessage}`)
        }
        // res.send(`${errorCode}<br>${errorMessage}`)
    });
});

module.exports = router;
