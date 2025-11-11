const {conexaoBanco} = require ('./database')

async function listarUsuarios(){
    const conexao = await conexaoBanco();
    const [rows] = await conexao.execute('SELECT * FROM usuario');
    return rows;
}

module.exports = {listarUsuarios};