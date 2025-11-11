const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/usuario', (req, res) => {
    res.send('Lista de usuários');
});
app.post('/usuario', (req, res) => {
    res.send('Add usuário');
});
app.put('/usuario', (req, res) => {
    res.send(`Atualiza usuário existente`);
});
app.delete('/usuario', (req, res) => {
    res.send('Deleta usuário');
});

 app.listen(3000); 
//  http://localhost:3000/usuario