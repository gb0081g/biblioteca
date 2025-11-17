const mysql = require('mysql2/promise')

async function conexaoBanco(){
    try{
    const conexao = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'senai',
        database : 'biblioteca'
    })
    return conexao;
} catch (error){
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
    }
}

module.exports = conexaoBanco;