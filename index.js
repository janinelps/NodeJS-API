const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado com Sucesso')

        Tabelas.init(conexao)

        const app = customExpress()
            //Inseriremos também a porta que o servidor deve escutar para acessar requisições
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
    //Este arquivo index.js é responsável por subir o servidor
})