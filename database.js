const mysql = require('mysql2/promise')

async function conexaoBanco(){
    const conexao = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'senai',
        database : 'biblioteca'
    })
    return conexao;
}

module.exports = conexaoBanco;