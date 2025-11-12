const conexaoBanco = require ('./database');

async function listarUsuarios(){
    const conexao = await conexaoBanco();
    const [rows] = await conexao.execute('SELECT * FROM usuario');
    return rows;
}

async
module.exports = {listarUsuarios};