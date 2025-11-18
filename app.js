const express = require('express'); 
const bodyParser = require('body-parser');
const {listarUsuarios} = require ('./usuario');
const {adicionarUsuario} = require ('./usuario');
const {atualizarUser} = require ('./usuario');
const app = express();
const {deletarUsuario} = require ('./usuario');

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
    try{
    let body        = req.body;
    const resultado = await adicionarUsuario(body); 
    res.send(`sucesso`); }
    catch (error){
        res.status(500).json({
            'error': "erro ao adicionar usuário"
        })
    }
    
});

app.put(`/usuario/:idusuario`, async (req, res) => {
    try {
        const idusuario = req.params.idusuario
        let body = req.body
        await atualizarUser(idusuario, body)
        res.status(200).send(`Usuário ${idusuario} Atualizado`)
    } catch (e) {
        res.status(500).json({
            "erro": e.message
        })
    }
});


app.delete('/usuario/:idusuario', async (req, res) => {

    try {
        const idusuario = (req.params.idusuario);
        await deletarUsuario(idusuario);
        res.status(200).send(`Usuário ${idusuario} deletado com sucesso.`);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message });
    }
});
 app.listen(3000); 
//  http://localhost:3000/usuario