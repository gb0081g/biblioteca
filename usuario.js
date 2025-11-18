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
        const [result] = await conexao.execute('INSERT INTO usuario (nome, email, tipo, tel) VALUES (?, ?, ?, ?)',[nome, email, tipo, tel]);
        return console.log(result.insertId);
    } catch (error) {
        throw new Error('Erro ao adicionar usuário: ' + (error));
    }
}

async function atualizarUser(idusuario, data) {
    try {
        const { nome, tipo, email, tel } = data;
        const conexao = await conexaoBanco();
        await conexao.execute(`UPDATE biblioteca.usuario SET nome = ?, tipo = ?, email = ?, tel = ? WHERE (idusuario = ?)`, [nome, tipo, email, tel, idusuario]);
        return
    } catch (e) {
        throw new Error(`Aconteceu algum erro para atualizar o usuário ${idusuario}, no banco de dados \n\n ${e.message}`)
    }
}

async function deletarUsuario(idusuario) {
    const conexao = await conexaoBanco();
    try{
        await conexao.execute('DELETE FROM usuario WHERE idusuario = ?', [idusuario]);
        return

    }catch (error){
        throw new Error('Erro ao deletar usuário: ' + (error));
    }
}

module.exports = { listarUsuarios, adicionarUsuario, atualizarUser, deletarUsuario };