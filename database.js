const mysql = require('mysql2')
async function conexaoBanco(){
const conexao = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'senai',
    database : 'biblioteca'
})
return conexao;
}

exports.conexao = {conexaoBanco};