const express = require('express'); 
const bodyParser = require('body-parser');
const {listarUsuarios} = require ('./usuario');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/usuario', async (req, res) => {
    const [rows] = await listarUsuarios();
    res.send(`Lista de usuários\n ${JSON.stringify(rows)}`);
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    res.send(`body: ${JSON.stringify(body)}`); 
});
app.put('/usuario', (req, res) => {
    res.send(`Atualiza usuário existente`);
});
app.delete('/usuario', (req, res) => {
    res.send('Deleta usuário');
});

 app.listen(3000); 
//  http://localhost:3000/usuario