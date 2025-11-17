const express = require('express'); 
const bodyParser = require('body-parser');
const {listarUsuarios} = require ('./usuario');
const {adicionarUsuario} = require ('./usuario');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/usuario', async (req, res) => {
    try{
    const rows = await listarUsuarios();
    res.status(200).send(`Lista de usuários\n ${JSON.stringify(rows)}`);
    }catch (error){
        res.status(500).json({
            'error': "erro ao buscar usuários"
        })
    }
});

app.post('/usuario', async (req, res) => {
    let body = req.body;
    const resultado = await adicionarUsuario(body); 
    res.send(`sucesso`); 
    
});
app.put('/usuario', (req, res) => {
    res.send(`Atualiza usuário existente`);
});
app.delete('/usuario', (req, res) => {
    res.send('Deleta usuário');
});

 app.listen(3000); 
//  http://localhost:3000/usuario