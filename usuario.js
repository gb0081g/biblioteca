const conexaoBanco = require('./database');

async function listarUsuarios() {
    const conexao = await conexaoBanco();
    try {
        const [rows] = await conexao.execute('SELECT * FROM usuario');
        return rows; 
    } catch (error) {
        throw new Error('Erro ao listar usuários: ' + (error));
    }
}

async function adicionarUsuario(data) {
    const conexao = await conexaoBanco();
    try {
        const { nome, email, tipo, tel } = data;
        const [result] = await conexao.execute(
            'INSERT INTO usuario (nome, email, tipo, tel) VALUES (?, ?, ?, ?)',
            [nome, email, tipo, tel]
        );
        return true;
    } catch (error) {
        throw new Error('Erro ao adicionar usuário: ' + (error));
    }
}

module.exports = { listarUsuarios, adicionarUsuario };